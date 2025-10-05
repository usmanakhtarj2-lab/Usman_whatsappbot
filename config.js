const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxwMDl3N0hTSk5xdk5GTDBvWnBETWZEc2dTL1UrZURkRDNLUCsraWJGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjhHL1MvelVGM2J1T3lLK0doQTZ2TzJ2R0U5L2IrUDFNUjUyTFAwalp5ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTm8rWXd5V1BMN0cyUU1EeEhYaVU0ODV5TlJjdFV0aTZpcENvVCt4aFY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2OWsvOHMzMXhIL1BlcHFiWktQcnFWbnVwbVViVkpJUFJYNUdONlFRTVdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEdmsrdSsyQ1ZXbVI3azlNZEp0eWwwRWFGTWUrUFUyS042T1YvSGJIM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJpeVdiV1FFSXJxOTE1ZENDa1R2a0VKWkNYSEJtNDF5bkwrb01PZXN4M0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NGZWpZS1dRNHR4NlpaTnJmWXdiNlIxb1ZldjRqWlR3bWdVYUxTNENIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjlwM1hqVDROejVWNGhkNEhMU0hEQWcwSXFEQnNrbTlUWCtuK01lOHlSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik43dzQ3dFRzRHd4cEpmT0tZTXRoL0tIREhUYnBvRVFMaTdiMDNFL1VlQUlXd0NjK1hkdTExSDdqZFNNOU1mM1ZVRExORHQzWmw2N2xibjY3NWN2UGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJEV2RqNkJXNFRVVWFUVVNwVTQ4ek1QZ3JXL01SOFQ2NkxtdmxNYzF4cnNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjY2OTA4OTExMzIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDREUwM0FBRTMwRjNBNzg3MjM2RjdDRjZCQzJERDRFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk2NTk1NjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjY2OTA4OTExMzIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRTZGREVERkVBMzc2OEY5NTY4RkZFM0JFRDIxNTgyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk2NTk1NjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjY2OTA4OTExMzIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMEM5RTY5NzQ0MTVBMzA4NEJDMjU3RDYwNDY5NDdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk2NTk1Njd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IktQR0hYM05FIiwibWUiOnsiaWQiOiI2NjkwODkxMTMyMDoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY3NjUwMTMxMzI1MDAyOjJAbGlkIiwibmFtZSI6IkpheWIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01maWpza0JFS21NaWNjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJISWFOdXZWcnc2eEZRbHBreUpFenkvWnprWld4RldjcW5tQUh1aUNMVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdWV0Q5WjBydUl2UGNxSkFQVVhEVFZ0NjBlMTNsZ0ROWjUwMWZ6VDlqTCtsdmhudGJkK2VBNlJMKzVSemZ4ZWF4WmMyWUdZMWxMUjR0MFcrQlZId0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXSk9STk5SMTIzMHBSak1Lc2VGZ25weGRnUTgwTlFtYmtJRlJDM1E4NDlZOVU4QlAwcGdrUWpYYlFjbmo5QlRXaVp0SytXbU95QU5oZW5TYTRvcUJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjY2OTA4OTExMzIwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVJ5R2picjFhOE9zUlVKYVpNaVJNOHYyYzVHVnNSVm5LcDVnQjdvZ2kxRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NjU5NTY0LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTU52In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Usman-Akhtar-Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Usman-Akhtar-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Usman-Akhtar-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "66908911320",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Usman-Akhtar-Bot Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Usman-Akhtar-Bot Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> still alive ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "66908911320",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
