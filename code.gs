function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('BookGenie')
      .addItem('Generate Content', 'triggerContentGeneration')
      .addItem('Finalize Document', 'finalizeDocument')
      .addToUi();
}

function onEdit(e) {
  var range = e.range;
  var value = range.getValue();
  // Check if the edit is made in a specific cell (e.g., B1) to trigger content generation
  if (range.getA1Notation() === 'B1' && value === 'Generate') {
    triggerContentGeneration();
  }
}

function triggerContentGeneration() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var currentContent = sheet.getRange('A1').getValue();
  
  // Check if A1 is empty or not suitable for output before overwriting
  if (currentContent === "") {
    var content = generateContent(); // Assume this function generates AI content
    sheet.getRange('A1').setValue(content);
  } else {
    SpreadsheetApp.getUi().alert('Cell A1 already contains content. Please clear it before generating new content.');
  }
}

function finalizeDocument() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var content = sheet.getRange('A1').getValue(); // Getting content from A1
  if (content) {
    var doc = DocumentApp.create('Final Document'); // Create a new Google Document
    doc.getBody().setText(content);
    doc.saveAndClose();
    SpreadsheetApp.getUi().alert('Document finalized and created: ' + doc.getUrl());
  } else {
    SpreadsheetApp.getUi().alert('No content in A1 to finalize. Please generate content first.');
  }
}

function generateContent() {
  // Placeholder for actual AI content generation logic
  // This should include API calls to OpenRouter or similar service
  return "This is a generated content snippet for the book."; // Example output
}