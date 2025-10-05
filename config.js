const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0YyWGNHVTVLWHkzbXBMaWVVeFl1MTZUQTlxamM3UkpaaUNJZFdpS2xYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQStCZ0dlZmVJQVlTa2tadXdSNU83Vi94MUhOclZId1NoL1JBVmNVeEJHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT3UvVzVnWjU3YWhXcitmc1BrZFJSTVVsdDkxSnFJcXFSa21GMWlGVDFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKaFY2NXFZMWt2QXVjTThwWHI5RlNOaSt5OGtjSUlNaW83S3g3TWk5SldFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEdmVyVVJGOUliU2NoWnAwMzNtOXlNT3VqYzhSeFo0b1NBL3RIdm9MMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBkYzdyVmZwcmxlV3lmNVNSZFpUbS9hZ1JaYll5cXJaTlMwRkxUdWxJMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUkxcTFwdkVmbllQVUdMMEN2eVVJNmVudGczOVRjd0NiNlp3NDl6ZmNFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVJKUGZiY0ZveFpCTzRvNzUvcmpBRklER2ZPb0lxZ3VSa0pmbktTSmRYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhxQWRGZm55WUxWdHVWTGJYNkhoZFBPZjJ6OG5CTzd1NTlVdWNWLzM5VzR5NTZHTEhoUjVWUVhyUlVCWDNVNUhlSG5OQXpTd0lTbWVNSjBLNEVIeENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IkZPMHBhc29iUlBHck9ISVlTazVmM3Fwd0xLZFlFN1JEZEp1OGlSTjZhWjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNjY5MDg5MTEzMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM2OUQyMTQyQ0Q5NDkyQUNEMjkyOUFDQUQwRDE3QjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTU5NTEwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjY5MDg5MTEzMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMyQjY1QjlBQjNCNUREQ0FCRUE5NzM2RTQzQkIzNkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTU5NTEwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjY5MDg5MTEzMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3QjFDNjYwQjFEOUY1MUY0NTM2Rjk2NzE2MUIwNDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTU5NTEwNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNVFQWlJGQlciLCJtZSI6eyJpZCI6IjY2OTA4OTExMzIwOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjc2NTAxMzEzMjUwMDI6MUBsaWQiLCJuYW1lIjoiSmF5YiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJpanNrQkVOdVVoY2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUkhJYU51dlZydzZ4RlFscGt5SkV6eS9aemtaV3hGV2Nxbm1BSHVpQ0xVTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ0JUSit1bWcrN1p3MDhVZlF0QmNBek1qekQzbE5JbmZqTGQ4ZTFFeHV1Tlo3L2IzbkFjNHdmcENBVlErNEpSTVN2dmhTM3JNbnhzREZVTnBXdUd2QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IktVdEMyUElOK2drUTlkY2VPSDMxM1Q3RGp4emZ1cnF2ZUNKTlgyYXgzUHBMa3dnaHNjamRIMFd0aFQzaS9mMUpnMTNhMHUxZFNRd2lCcjBoR1A4UEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjY5MDg5MTEzMjA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVUnlHamJyMWE4T3NSVUphWk1pUk04djJjNUdWc1JWbktwNWdCN29naTFEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk1OTUxMDIsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCd0sifQ==",
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
