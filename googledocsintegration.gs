function createDocument(title) {
  var doc = DocumentApp.create(title);
  return doc.getId();
}

function appendContentToDocument(docId, content) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  body.appendParagraph(content);
}

function formatDocument(docId) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  
  // Example formatting: 
  body.setMarginTop(36);
  body.setMarginBottom(36);
  body.setMarginLeft(36);
  body.setMarginRight(36);
  
  var paragraphs = body.getParagraphs();
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setFontSize(12);
    paragraphs[i].setSpacingAfter(10);
  }
  
  // Add a title format
  var firstParagraph = paragraphs[0];
  firstParagraph.setHeading(DocumentApp.ParagraphHeading.HEADING1);
}