```markdown
# vibesheet-20250707_222025

## Project Description
[BookGenie](https://docs.google.com/document/d/1qWaWJbgOlUSQMdLmn4q3uKG7jNhgCtqf5Q0kAOW6k6o/) is an intuitive Google Sheets tool designed to assist users in the book writing process by leveraging AI-generated content. It facilitates idea generation, content development, and draft compilation to enhance the creative writing journey.

## Overview
The BookGenie tool provides a user-friendly interface that allows users to input their book ideas and protagonist details, trigger content generation using the OpenRouter API, customize the output, and compile everything into a Google Docs format for finalization. The application seamlessly integrates Google Sheets for user interaction and Google Docs for the final book output.

## Features
- User input for book ideas and protagonist details
- Content generation for book title, chapters, and back cover text using OpenRouter API
- User customization of generated content
- Compilation of all content into a Google Docs format
- User-friendly interface with buttons for ease of use
- Sidebar for enhanced user interaction

## Installation Instructions
1. **Open Google Sheets** and create a new spreadsheet.
2. Navigate to **Extensions > Apps Script** to open the Google Apps Script editor.
3. Copy and paste the following files into the script editor:
   - `code.gs`
   - `contentgeneration.gs`
   - `googledocsintegration.gs`
   - `customizationfeatures.gs`
   - `sidebar.html`
   - `uicomponents.html`
4. To deploy the sidebar, add the following code in `code.gs`:
   ```javascript
   function onOpen() {
       var ui = SpreadsheetApp.getUi();
       ui.createMenu('BookGenie')
           .addItem('Open Sidebar', 'renderSidebar')
           .addToUi();
   }
   ```
5. Add your OpenRouter API key in the necessary sections within the `contentgeneration.gs`.
6. Save and close the Apps Script editor.
7. **Refresh** your Google Sheet to access the sidebar through the 'BookGenie' menu.

## Usage Examples
1. Open the **BookGenie** sidebar from the Google Sheets menu.
2. Enter your book title and protagonist details in the provided fields.
3. Click on **Generate Content** to create titles, chapters, and back cover text using the AI model.
4. Review and customize the generated content.
5. Once satisfied, click **Compile Document** to generate a Google Docs file of your book.

## List of Components
| Component                     | File Type | Status   | Purpose                                                                                     |
|-------------------------------|-----------|----------|---------------------------------------------------------------------------------------------|
| **Main Logic**                | `code.gs` | Pass     | Handles logic including API calls, data processing, and content generation.                |
| **Sidebar UI**                | `sidebar.html` | Updated  | User interface providing input fields and buttons for user interactions.                   |
| **Content Generation API**     | `contentgeneration.gs` | Pass     | Functions for communicating with the OpenRouter API to generate content based on input.   |
| **Google Docs Integration**    | `googledocsintegration.gs` | Pass     | Compiles generated content into Google Docs.                                              |
| **UI Components**              | `uicomponents.html` | Updated  | Additional UI components for the sidebar beyond basic input sections.                      |
| **Customization Features**     | `customizationfeatures.gs` | Pass     | Functions that allow users to customize their generated content.                           |

## Dependencies
- **OpenRouter API**: Required for content generation.
- **Google Docs API**: Necessary for compiling content into Google Docs.

## Additional Information
- Ensure that you have the necessary permissions enabled for accessing the APIs used.
- Regular updates may be provided to improve functionality and user experience.
- For any questions or issues, please create an issue in the project repository or contact the project maintainer.

---
Happy Writing with BookGenie! ??
```