function doPost(e) {
  try {
    // Parse the JSON payload
    var data = JSON.parse(e.postData.contents);

    var name = data.name;
    var email = data.email;
    var other = data.other;
    var imageBase64 = data.image;

    // Extract the base64 string from data URL if present
    var base64String = imageBase64;
    if (imageBase64.indexOf('base64,') !== -1) {
      base64String = imageBase64.split('base64,')[1];
    }

    // Convert base64 to blob
    var contentType = "image/png"; // default content type
    if (data.imageType) {
      contentType = data.imageType;
    }
    var decoded = Utilities.base64Decode(base64String);
    var blob = Utilities.newBlob(decoded, contentType, data.imageName || "uploaded_image.png");

    // Save the image to Drive folder (create folder if not exists)
    var folderName = "StudentFormUploads";
    var folders = DriveApp.getFoldersByName(folderName);
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }
    var file = folder.createFile(blob);

    // Log or save the data (for example, append to a Google Sheet)
    var sheetName = "FormResponses";
    var sheetId = "1vtBOW9ZPh7UfaKjUP42ollLs0tHvazBtxg6a9bWafqk";
    var ss = SpreadsheetApp.openById(sheetId);
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(["Timestamp", "Name", "Email", "Contact Info", "Image URL"]);
    }
    var imageUrl = file.getUrl();
    sheet.appendRow([new Date(), name, email, other, imageUrl]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({result: "error", message: error.message})).setMimeType(ContentService.MimeType.JSON);
  }
}