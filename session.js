//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmik
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0QyeVFKbzZoQXVsb2d3TGpRV2V2RjZxZDRBZUxodkFXT2hlM0pXNFdVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjZHcGhBRitmdUpwc1Q1T1lOdnBHbFJXU1RReVZUWHAwSXhLTVJBcEozOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R0xwdnhFMVFiMHJoY2RiM0x5N2dmbDI1Y2FLUFRjS043WU1wRWNJdDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRkNKMjNGaEVhTkRlNUdhZVhxOXNRcUJiVDkxdFF3SElHMUxFcFZxZFJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNT0ZwejNpUTcrcGRqeUZUWVhDWHNwT2p2SHpoa1lLMzB1WFRzdDZuMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWZEpBR0pwa2xIZ21wQW5seEM1M21WNUJ6ZFBnTE9jeHl0c2EybENQelE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBQWW5aOEtvNStGWjZYTWZkT3VwNW5QSVRHcWpRTGk4Ykd5TDdxaDMwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1djYWNSWlovZlRyOGFFY1ZHTHpZdzlQZWRFVTlXVm1rbEZmQ1hkRTJBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFwL0xsQzE0eUkyMEZPTHgvTkdjVW5ZazA4dzhGeFJhYk5OS0FyYXJVWDU1NWdNcW9SUmtzSTZlbDFKaGR1a1JBUjd0U2ZJWmdHbGxzbk1pZ21nVWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJreFlPc01qZHRSU0ErblAxeWpIU1duVUtaWEdxU2tKcXBpNm10c3lzQ3UwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzSFM0c0tWclNNLWx6LTMzbkRmNExRIiwicGhvbmVJZCI6IjMwZGY4NDljLTVjMDctNGUzNi04OTQwLWE3Nzg0NzQ1NGJlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHeno4WWtaYzFhOGV1MVVNOVUvK0EyUDkydU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFFvbWo0WmVLM0JIb0xGMGxwdTVCSTJ2U2lRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJORUpHUDdOIiwibWUiOnsiaWQiOiI5NDc0MzIxMjQ4OToxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI4MTE1Nzg1MzgzMTI3NjoxNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozTjN2NEZFS2VNNzhJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5OT2ZaT2xnNmRhVWVaR1liL0lNMWxRZXpXY1RGV0tnaC96ZEtIczByQ009IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxpZmJCUXNkN2RPNUgxRFFVeTFHR3ZIaXdhclVrTU1yQnpqSTFpa0NBcDVXa3N0MDZHYzhNaHJVWUxwQzl0MHNSTjI4Q0dCb0ZOdDcvRUxYa0poUkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSUEt4QzlyNjMwcVBBeW5zYTQ1MTNWL0c2aC9mT1VXN3dlMVM2UjhwR2dEOEgyQTV5U1VsZk8rVHNJR3ZRbGpQVzJnVXBqTTlBM0o5YytlNllPcHJqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQzMjEyNDg5OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRUVG4yVHBZT25XbEhtUm1HL3lETlpVSHMxbkV4VmlvSWY4M1NoN05Ld2oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDg0NDk4MCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGQ2cifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
