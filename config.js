const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "𝐑𝐢𝐜𝐡𝐚𝐫𝐝";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255789622341";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || " "  // PUT your SESSION_ID 
SUHAIL_19_53_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc1LFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZqblNWSncwb0FMR1g2b0Rad21KMUhISFFDY0dzdElDekpZb3lHYTJERU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBUM1BvRTU2UUdTRWVEZ0Fva1gxTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTFhNTcwYmMtMjY5OC00OTcyLTgzNzEtZTc4ZjljNjU1Y2UxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDEzNyxcbiAgICAgIDkxLFxuICAgICAgNjksXG4gICAgICAxOTksXG4gICAgICAyMzIsXG4gICAgICAxNDAsXG4gICAgICAyMjAsXG4gICAgICAyNDYsXG4gICAgICA1MSxcbiAgICAgIDEwMCxcbiAgICAgIDEwOSxcbiAgICAgIDQwLFxuICAgICAgMCxcbiAgICAgIDQ5LFxuICAgICAgMjI4LFxuICAgICAgMjQ2LFxuICAgICAgMTc1LFxuICAgICAgMTgzLFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAyNyxcbiAgICAgIDEzNSxcbiAgICAgIDI0MSxcbiAgICAgIDE5NCxcbiAgICAgIDIyMCxcbiAgICAgIDIxNSxcbiAgICAgIDIzMyxcbiAgICAgIDE4LFxuICAgICAgMTExLFxuICAgICAgMTIyLFxuICAgICAgMTMyLFxuICAgICAgMjQ3LFxuICAgICAgOSxcbiAgICAgIDExNCxcbiAgICAgIDE1LFxuICAgICAgMjMwLFxuICAgICAgMTQxLFxuICAgICAgMTgsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEZNWUdaSDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc4OTYyMjM0MToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMDg3NzI1NTYzOTExOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uaGt1OENFTEc1bkxzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDc0SjB6UjdDcklXelp5K3dEc0pyakFKL0pRYUI0UHdMeWxyWEZUSTV6dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVN1hFOU1NQWRSa0VPbEhGWVF2Ykg0RVNXZjBJeGN4dFI1aVFTcjhxWGxNTCtqMUhueGZyWXNwdEZQWXhGV0tvY3RVV09DdFlkcXhBWk4vMnM2OW1DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqcTlEaStNd1FZT0g0UnlNZk02YTE2Vzd6b1RDN1RVVFhSWWwvejZYdUJpTXRHM0JBaFIvamlBL1BvS1ZVc0pkNExERm5VMGU0cTZBMVBzKzFkdjVCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3ODk2MjIzNDE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDgxMDgwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ZS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1lLLmpzb24iOiAie1wia2V5RGF0YVwiOlwidTFKR2oveGFrTXRIWVhOMHp1M0xhbnBoLzRwQ3BlTWJ2UXlkTUROeXVVdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Njk5NjIxODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDU5MzMzNzMzMVwifSIKfQ==

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐑𝐢𝐜𝐡𝐚𝐫𝐝",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝐑𝐢𝐜𝐡𝐚𝐫𝐝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
