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
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_28_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZlckNQRytTN1Z0VlVnNm1FM2pQVEpVQ1JyU2ptcUVna2pPYVNDb2JBVEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImsxM25RNGo3UXVXbnBBN0dzeVFWbndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGQ5MjE4YTEtZmU0NC00NTc0LWIyZTUtMmY5NGRhYTQwYzFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE4LFxuICAgICAgMTEsXG4gICAgICAxMjAsXG4gICAgICAxMDgsXG4gICAgICAxODcsXG4gICAgICA4MSxcbiAgICAgIDEwNixcbiAgICAgIDg4LFxuICAgICAgMjMsXG4gICAgICAxMzksXG4gICAgICAyOSxcbiAgICAgIDYzLFxuICAgICAgMTgxLFxuICAgICAgMTQ0LFxuICAgICAgMTE5LFxuICAgICAgOSxcbiAgICAgIDE3MyxcbiAgICAgIDg2LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICA5LFxuICAgICAgNDgsXG4gICAgICA4MixcbiAgICAgIDE4OCxcbiAgICAgIDk5LFxuICAgICAgMTMsXG4gICAgICAyMTIsXG4gICAgICAyNDgsXG4gICAgICA5MixcbiAgICAgIDcxLFxuICAgICAgMjQwLFxuICAgICAgMjIyLFxuICAgICAgMjA0LFxuICAgICAgMTkyLFxuICAgICAgNzksXG4gICAgICAzNSxcbiAgICAgIDE2OSxcbiAgICAgIDg5LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZFUTFENThLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODk2MjIzNDE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTA4NzcyNTU2MzkxMToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbmhrdThDRUs2V2o3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQ3NEowelI3Q3JJV3paeSt3RHNKcmpBSi9KUWFCNFB3THlsclhGVEk1enc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWkybHNCdFEraGpFREk3c3N6R3NnZ2pWcHR0K2IveWFwcm9MaUIzNzlIc1B2UzhNdGZaMHBZNUZSYVg3YWE5akJtSzBvMUdtZE0xdHJ1VHBCY1lPQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHRpZkFGcU9HVFNzaVppd1p0UUZuN0hyekJqS1U5anZuUWMrR1Q5cURpcWJWbWhPY0k0Uk0xb0Fjbk1GcW5jN0tuS2VrbFNuMlR3bVpJbUVTTFJ4QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg5NjIyMzQxOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1OTMzMjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9   "  // PUT your SESSION_ID 


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
