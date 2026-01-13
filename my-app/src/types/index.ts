//==============BONOTES===================//
// Base interface for button components
//========================================//
export interface baseButton {
  text?: string;
  id: string;
  image?: string;
}
//==============DATA TYPES==================//
// Base interface for data items
//========================================//
export interface NoteContent {
  title: string;
  description: string;
  code?: string;
  image?: string;
  video?: string;
}
