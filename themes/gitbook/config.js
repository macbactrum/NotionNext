const CONFIG = {

  INDEX_PAGE: 'about', //Articles displayed on the document homepage, please make sure this path is included in your notice database

  AUTO_SORT: process.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT || true, // Whether to automatically sort articles by category name; automatic grouping may disrupt the order of articles in your Notion

  // Menu
  MENU_CATEGORY: true, // Display category
  MENU_TAG: true, // show tag
  MENU_ARCHIVE: true, // Show archive
  MENU_SEARCH: true, // Display search

  // Widget
  WIDGET_REVOLVER_MAPS: process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // Map plugin
  WIDGET_TO_TOP: true // Jump back to top
}
export default CONFIG
