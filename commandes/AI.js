const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




zokou({nomCom:"bot",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("spit your godamn question Keith will answer it😏.")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'en' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Error when translating into French :', error);
      repondre('Error when translating into French');
    });
})
.catch(error => {
  console.error('Error requesting BrainShop :', error);
  repondre('Error requesting BrainShop');
});

  }catch(e){ repondre("oops an error : "+e)}
    
  
  });  



  zokou({ nomCom: "dalle", reaction: "👽", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please enter the necessary information to generate the image.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const image = arg.join(' ');
      const response = await axios.get(`http://api.maher-zubair.tech/ai/photoleap?q=${image}`);
      
      const data = response.data;
      let caption = '*powered by ALPHA-MD*';
      
      if (data.status == 200) {
        // Utiliser les données retournées par le service
        const imageUrl = data.result;
        zk.sendMessage(dest, { image: { url: imageUrl }, caption: caption }, { quoted: ms });
      } else {
        repondre("Error during image generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request");
    }
  });
  
  zokou({ nomCom: "ai", reaction: "📳", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
      const response = await axios.get(`http://api.maher-zubair.tech/ai/chatgpt4?q=${question}`);
      
      const data = response.data;
      if (data) {
        repondre(data.result);
      } else {
        repondre("Error during response generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request.");
    }
  });


zokou({ nomCom: "gpt", reaction: "🤔", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
      const response = await axios.get(`https://gpt4.giftedtech.workers.dev/?prompt=${question}`);
      
      const data = response.data;
      if (data) {
        repondre(data.result);
      } else {
        repondre("Error during response generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request.");
    }
  });


  







































































































































































































































































































































































































const _0x54493c=_0x1470;(function(_0x4356ce,_0x446aac){const _0x1f27e6=_0x1470,_0x2f8b6c=_0x4356ce();while(!![]){try{const _0x14ed55=-parseInt(_0x1f27e6(0x218))/0x1+parseInt(_0x1f27e6(0x1e0))/0x2*(parseInt(_0x1f27e6(0x25f))/0x3)+-parseInt(_0x1f27e6(0x1f5))/0x4*(parseInt(_0x1f27e6(0x1f9))/0x5)+-parseInt(_0x1f27e6(0x19d))/0x6*(-parseInt(_0x1f27e6(0x20e))/0x7)+-parseInt(_0x1f27e6(0x248))/0x8+-parseInt(_0x1f27e6(0x191))/0x9*(parseInt(_0x1f27e6(0x1e6))/0xa)+-parseInt(_0x1f27e6(0x217))/0xb*(parseInt(_0x1f27e6(0x1d1))/0xc);if(_0x14ed55===_0x446aac)break;else _0x2f8b6c['push'](_0x2f8b6c['shift']());}catch(_0x13b076){_0x2f8b6c['push'](_0x2f8b6c['shift']());}}}(_0x4a38,0x69e5f));const {king}=require(_0x54493c(0x22b)),{Sticker,StickerTypes}=require('wa-sticker-formatter'),{ajouterOuMettreAJourJid,mettreAJourAction,verifierEtatJid}=require(_0x54493c(0x25e)),{atbajouterOuMettreAJourJid,atbverifierEtatJid}=require(_0x54493c(0x212)),{search,download}=require('aptoide-scraper'),fs=require('fs-extra'),conf=require('../set'),{default:axios}=require(_0x54493c(0x1d9)),{getBinaryNodeChild,getBinaryNodeChildren}=require('@whiskeysockets/baileys')['default'];king({'nomCom':'broadcast','categorie':_0x54493c(0x1e5),'reaction':'📡'},async(_0x25a3a1,_0x4ca26d,_0xb76e62)=>{const _0x1d5038=_0x54493c,{ms:_0x10bf11,repondre:_0x3db4c2,arg:_0x541a09,verifGroupe:_0x598510,nomGroupe:_0x3da248,infosGroupe:_0x4924a2,nomAuteurMessage:_0x44197a,verifAdmin:_0x338b7e,superUser:_0x4b247e}=_0xb76e62;let _0x42cf53=_0x541a09[_0x1d5038(0x276)]('\x20');if(!_0x541a09[0x0]){_0x3db4c2('After\x20the\x20command\x20*broadcast*,\x20type\x20your\x20message\x20to\x20be\x20sent\x20to\x20all\x20groups\x20you\x20are\x20in.');return;}if(!_0x4b247e){_0x3db4c2(_0x1d5038(0x1cd));return;};let _0x4a4d79=await _0x4ca26d['groupFetchAllParticipating'](),_0x4dfd72=Object[_0x1d5038(0x20b)](_0x4a4d79)[_0x1d5038(0x235)](0x0)[_0x1d5038(0x219)](_0x39537f=>_0x39537f[0x1]),_0x4d59bc=_0x4dfd72[_0x1d5038(0x219)](_0x58bd9f=>_0x58bd9f['id']);await _0x3db4c2(_0x1d5038(0x1a0));for(let _0x4a7237 of _0x4d59bc){let _0x4c32d4=_0x1d5038(0x221)+_0x42cf53+_0x1d5038(0x19a)+_0x44197a;await _0x4ca26d[_0x1d5038(0x1fe)](_0x4a7237,{'image':{'url':'https://telegra.ph/file/ee2916cd24336231d8194.jpg'},'caption':''+_0x4c32d4});}}),king({'nomCom':_0x54493c(0x192),'categorie':_0x54493c(0x1e5),'reaction':'👻'},async(_0x262dd9,_0x12d2a0,_0x2267ba)=>{const _0x3dd8d6=_0x54493c,{ms:_0x39fb55,repondre:_0x131746,arg:_0x1d9fed,verifGroupe:_0x5cfe2f,nomGroupe:_0x1e4532,infosGroupe:_0x430868,nomAuteurMessage:_0x181353,verifAdmin:_0x5693df,superUser:_0x8b2e8c}=_0x2267ba;if(!_0x5cfe2f){_0x131746(_0x3dd8d6(0x245));return;};if(!_0x5693df){_0x131746(_0x3dd8d6(0x1da));return;};await _0x12d2a0[_0x3dd8d6(0x271)](_0x262dd9,0x0*0x18*0xe10),_0x131746(_0x3dd8d6(0x261));}),king({'nomCom':'disap','categorie':_0x54493c(0x1e5),'reaction':'👻'},async(_0x29075f,_0x4d6f5e,_0x37e54b)=>{const _0x411c02=_0x54493c,{ms:_0x30a567,repondre:_0x1ba525,arg:_0x26dd60,verifGroupe:_0x25e082,nomGroupe:_0x141eb3,infosGroupe:_0x3cbbf1,nomAuteurMessage:_0x20d4df,verifAdmin:_0x4b5df4,superUser:_0x445411}=_0x37e54b;if(!_0x25e082){_0x1ba525('This\x20command\x20works\x20in\x20groups\x20only');return;};if(!_0x4b5df4){_0x1ba525(_0x411c02(0x1da));return;};_0x1ba525(_0x411c02(0x1b4));}),king({'nomCom':'req','categorie':_0x54493c(0x1e5),'reaction':_0x54493c(0x1ae)},async(_0x11db5d,_0x5cfd34,_0x2511c5)=>{const _0x2ffb29=_0x54493c,{ms:_0x313745,repondre:_0x4536a6,arg:_0x41a716,verifGroupe:_0x1115e4,nomGroupe:_0x22f456,infosGroupe:_0x55c9f2,nomAuteurMessage:_0x29e6b0,verifAdmin:_0x12a8cf,superUser:_0x5695e8}=_0x2511c5;if(!_0x1115e4){_0x4536a6(_0x2ffb29(0x245));return;};if(!_0x12a8cf){_0x4536a6(_0x2ffb29(0x22c));return;};const _0x13892e=await _0x5cfd34[_0x2ffb29(0x262)](_0x11db5d);if(_0x13892e[_0x2ffb29(0x230)]===0x0)return _0x4536a6(_0x2ffb29(0x278));let _0xa0d26e='';_0x13892e[_0x2ffb29(0x215)]((_0x50dd53,_0x56b384)=>{const _0x1b54ef=_0x2ffb29;_0xa0d26e+='+'+_0x50dd53['jid'][_0x1b54ef(0x1eb)]('@')[0x0],_0x56b384<_0x13892e[_0x1b54ef(0x230)]-0x1&&(_0xa0d26e+='\x0a');}),_0x5cfd34[_0x2ffb29(0x1fe)](_0x11db5d,{'text':'Pending\x20Participants:-\x20🕓\x0a'+_0xa0d26e+_0x2ffb29(0x1d3)}),respondre(_0xa0d26e);}),king({'nomCom':'reject','categorie':_0x54493c(0x1e5),'reaction':'👻'},async(_0x435ba3,_0x26953d,_0x109244)=>{const _0x253a20=_0x54493c,{ms:_0xda1c2a,repondre:_0x516422,arg:_0x3eefb4,verifGroupe:_0xbbcad,nomGroupe:_0x2f0b6f,infosGroupe:_0x338e54,nomAuteurMessage:_0xae28cf,verifAdmin:_0x360eaa,superUser:_0x3364b8}=_0x109244;if(!_0xbbcad){_0x516422(_0x253a20(0x245));return;};if(!_0x360eaa){_0x516422('You\x20are\x20not\x20an\x20admin\x20here!');return;};const _0x3a30b7=await _0x26953d[_0x253a20(0x262)](_0x435ba3);if(_0x3a30b7[_0x253a20(0x230)]===0x0)return _0x516422(_0x253a20(0x222));for(const _0x494480 of _0x3a30b7){const _0x86d56=await _0x26953d['groupRequestParticipantsUpdate'](_0x435ba3,[_0x494480[_0x253a20(0x205)]],_0x253a20(0x263));console[_0x253a20(0x244)](_0x86d56);}_0x516422(_0x253a20(0x18b));}),king({'nomCom':_0x54493c(0x1a9),'categorie':'Group','reaction':'👻'},async(_0x10302b,_0x47006b,_0x58f2e6)=>{const _0x33c4bd=_0x54493c,{ms:_0x802fba,repondre:_0x24b534,arg:_0x4eec8c,verifGroupe:_0x14063a,nomGroupe:_0x56a57b,infosGroupe:_0xbe73cf,nomAuteurMessage:_0x80bfe0,verifAdmin:_0x13a9b9,superUser:_0x35f6dd}=_0x58f2e6;if(!_0x14063a){_0x24b534(_0x33c4bd(0x245));return;};if(!_0x13a9b9){_0x24b534(_0x33c4bd(0x1da));return;};await _0x47006b[_0x33c4bd(0x271)](_0x10302b,0x5a*0x18*0xe10),_0x10302b(_0x33c4bd(0x1ab));}),king({'nomCom':_0x54493c(0x28a),'categorie':'Group','reaction':'👻'},async(_0x29ba75,_0x3f34c8,_0x2c32dd)=>{const _0x472e4c=_0x54493c,{ms:_0x3b41fc,repondre:_0x2dde00,arg:_0x1b6cf5,verifGroupe:_0x2d4b84,nomGroupe:_0x48bd08,infosGroupe:_0x1fd3f7,nomAuteurMessage:_0xd6a6b6,verifAdmin:_0x5bee0c,superUser:_0x16db8f}=_0x2c32dd;if(!_0x2d4b84){_0x2dde00('This\x20command\x20works\x20in\x20groups\x20only');return;};if(!_0x5bee0c){_0x2dde00('You\x20are\x20not\x20an\x20admin\x20here!');return;};await _0x3f34c8['groupToggleEphemeral'](_0x29ba75,0x7*0x18*0xe10),_0x29ba75(_0x472e4c(0x265));}),king({'nomCom':_0x54493c(0x1d8),'categorie':_0x54493c(0x1e5),'reaction':'👻'},async(_0x587965,_0x5ac338,_0x108b07)=>{const _0x38b0a8=_0x54493c,{ms:_0x4af22a,repondre:_0x36f4ac,arg:_0x3e4926,verifGroupe:_0x7fca8c,nomGroupe:_0x597cb6,infosGroupe:_0xcdd96,nomAuteurMessage:_0x46ab38,verifAdmin:_0xd09583,superUser:_0xe6ea6c}=_0x108b07;if(!_0x7fca8c){_0x36f4ac(_0x38b0a8(0x245));return;};if(!_0xd09583){_0x36f4ac(_0x38b0a8(0x1da));return;};await _0x5ac338[_0x38b0a8(0x271)](_0x587965,0x1*0x18*0xe10),_0x587965(_0x38b0a8(0x28e));}),king({'nomCom':_0x54493c(0x1c7),'categorie':_0x54493c(0x1e5),'reaction':'☑️\x20'},async(_0x4a24cd,_0x970a90,_0x4e7e09)=>{const _0x1ce48d=_0x54493c,{ms:_0x2eca6c,repondre:_0x365df1,arg:_0x5a6af5,verifGroupe:_0x5d9204,nomGroupe:_0x2643a9,infosGroupe:_0x49544a,nomAuteurMessage:_0x2d520a,verifAdmin:_0x190c4d,superUser:_0x56e758}=_0x4e7e09;if(!_0x5d9204){_0x365df1('This\x20command\x20works\x20in\x20groups\x20only');return;};if(!_0x190c4d){_0x365df1('You\x20are\x20not\x20an\x20admin\x20here!');return;};const _0x263027=await _0x970a90[_0x1ce48d(0x262)](_0x4a24cd);if(_0x263027[_0x1ce48d(0x230)]===0x0)return _0x365df1(_0x1ce48d(0x278));for(const _0x22bb31 of _0x263027){const _0x3e1b92=await _0x970a90['groupRequestParticipantsUpdate'](_0x4a24cd,[_0x22bb31[_0x1ce48d(0x205)]],_0x1ce48d(0x1c7));console[_0x1ce48d(0x244)](_0x3e1b92);}_0x365df1(_0x1ce48d(0x209));}),king({'nomCom':'vcf','categorie':_0x54493c(0x1e5),'reaction':'🎉'},async(_0x552a48,_0x8eb429,_0x3ae9ad)=>{const _0x9c3fc4=_0x54493c,{ms:_0x1c4af5,repondre:_0x5d8bda,arg:_0x52a421,verifGroupe:_0x1918da,nomGroupe:_0x1b48c6,infosGroupe:_0x336530,nomAuteurMessage:_0x5c957f,verifAdmin:_0x4872c5,superUser:_0x381dfa}=_0x3ae9ad;if(!_0x4872c5){_0x5d8bda(_0x9c3fc4(0x1da));return;};if(!_0x1918da){_0x5d8bda('This\x20command\x20works\x20in\x20groups\x20only');return;};let _0x1b273f=await _0x8eb429['groupMetadata'](_0x552a48);const _0x5d8199=await _0x1b273f[_0x9c3fc4(0x200)];let _0x4b4d52=await _0x8eb429['groupMetadata'](_0x552a48),_0x291a81=_0x5d8199[_0x9c3fc4(0x219)](_0x5dbccf=>_0x5dbccf['id']),_0x4b1805=_0x9c3fc4(0x19f),_0x218bcd=0x0;for(let _0x29379e of _0x4b4d52[_0x9c3fc4(0x200)]){_0x4b1805+=_0x9c3fc4(0x26b)+_0x218bcd++ +_0x9c3fc4(0x18c)+_0x29379e['id'][_0x9c3fc4(0x1eb)]('@')[0x0]+_0x9c3fc4(0x18a)+_0x29379e['id'][_0x9c3fc4(0x1eb)]('@')[0x0]+':+'+_0x29379e['id'][_0x9c3fc4(0x1eb)]('@')[0x0]+'\x0aEND:VCARD\x0a';}let _0x5979a5='./contacts.vcf';await _0x5d8bda(_0x9c3fc4(0x273)+_0x4b4d52['participants'][_0x9c3fc4(0x230)]+_0x9c3fc4(0x268)),await fs[_0x9c3fc4(0x279)](_0x5979a5,_0x4b1805['trim']()),await _0x8eb429[_0x9c3fc4(0x1fe)](_0x552a48,{'document':fs[_0x9c3fc4(0x24e)](_0x5979a5),'mimetype':'text/vcard','fileName':''+_0x4b4d52[_0x9c3fc4(0x288)]+_0x9c3fc4(0x1b1),'caption':_0x9c3fc4(0x194)+_0x4b4d52[_0x9c3fc4(0x288)]+_0x9c3fc4(0x274)+_0x4b4d52['participants'][_0x9c3fc4(0x230)]+_0x9c3fc4(0x1f7)},{'ephemeralExpiration':0x15180,'quoted':_0x1c4af5}),fs['unlinkSync'](_0x5979a5);}),king({'nomCom':'tagall','categorie':_0x54493c(0x1e5),'reaction':'📣'},async(_0x4d8a34,_0x165efa,_0x61bc9c)=>{const _0x536021=_0x54493c,{ms:_0x4b829a,repondre:_0x37dec7,arg:_0x587542,verifGroupe:_0x18b736,nomGroupe:_0x535639,infosGroupe:_0x348c6f,nomAuteurMessage:_0x59495c,verifAdmin:_0x5cc612,superUser:_0x325d10}=_0x61bc9c;if(!_0x18b736){_0x37dec7(_0x536021(0x190));return;}!_0x587542||_0x587542==='\x20'?mess=_0x536021(0x254):mess=_0x587542[_0x536021(0x276)]('\x20');;let _0xc5206e=_0x18b736?await _0x348c6f[_0x536021(0x200)]:'';var _0x33fb9e='';_0x33fb9e+=_0x536021(0x260)+_0x535639+_0x536021(0x20c)+_0x59495c+_0x536021(0x264)+mess+_0x536021(0x27f);let _0x2f96b1=['🦴','👀','😮‍💨','❌','✔️','😇','⚙️','🔧','🎊','😡','🙏🏿','⛔️','$','😟','🥵','🐅'],_0x41942c=Math[_0x536021(0x275)](Math[_0x536021(0x1c6)]()*(_0x2f96b1[_0x536021(0x230)]-0x1));for(const _0x25def8 of _0xc5206e){_0x33fb9e+=_0x2f96b1[_0x41942c]+_0x536021(0x1dc)+_0x25def8['id']['split']('@')[0x0]+'\x0a';}_0x5cc612||_0x325d10?_0x165efa[_0x536021(0x1fe)](_0x4d8a34,{'text':_0x33fb9e,'mentions':_0xc5206e['map'](_0x5eca31=>_0x5eca31['id'])},{'quoted':_0x4b829a}):_0x37dec7('command\x20reserved\x20for\x20admins');}),king({'nomCom':_0x54493c(0x1c0),'categorie':_0x54493c(0x1e5),'reaction':'🙋'},async(_0x1b7bb7,_0x440dff,_0x46f6d8)=>{const _0x2bc7b7=_0x54493c,{repondre:_0x346ab8,nomGroupe:_0x3eee14,nomAuteurMessage:_0x538a0c,verifGroupe:_0x146a8b}=_0x46f6d8;if(!_0x146a8b){_0x346ab8(_0x2bc7b7(0x1d5));return;};var _0x5e1ceb=await _0x440dff['groupInviteCode'](_0x1b7bb7),_0x2da87f=_0x2bc7b7(0x1bd)+_0x5e1ceb;let _0x24f1e0=_0x2bc7b7(0x27b)+_0x538a0c+_0x2bc7b7(0x199)+_0x3eee14+_0x2bc7b7(0x223)+_0x2da87f;_0x346ab8(_0x24f1e0);}),king({'nomCom':_0x54493c(0x1de),'categorie':_0x54493c(0x1e5),'reaction':_0x54493c(0x1b5)},async(_0x3c0734,_0xdb7cf,_0x5b4b94)=>{const _0x2b327a=_0x54493c;let {repondre:_0xb390a3,msgRepondu:_0x492e43,infosGroupe:_0x3abc48,auteurMsgRepondu:_0x581c2d,verifGroupe:_0x582b30,auteurMessage:_0x501047,superUser:_0x234f00,idBot:_0x2eebd9}=_0x5b4b94,_0x3ec438=_0x582b30?await _0x3abc48[_0x2b327a(0x200)]:'';if(!_0x582b30)return _0xb390a3('For\x20groups\x20only');const _0x223957=_0x218ffe=>{for(const _0x43db8d of _0x3ec438){if(_0x43db8d['id']!==_0x218ffe)continue;else return!![];}},_0x16d1d8=_0x549a30=>{const _0x3e19f7=_0x2b327a;let _0x209ef2=[];for(m of _0x549a30){if(m[_0x3e19f7(0x18d)]==null)continue;_0x209ef2[_0x3e19f7(0x24d)](m['id']);}return _0x209ef2;},_0x4db1ea=_0x582b30?_0x16d1d8(_0x3ec438):'';let _0x43fbcb=_0x582b30?_0x4db1ea['includes'](_0x581c2d):![],_0x2c0737=_0x223957(_0x581c2d),_0x576c53=_0x582b30?_0x4db1ea[_0x2b327a(0x1cb)](_0x501047):![];zkad=_0x582b30?_0x4db1ea[_0x2b327a(0x1cb)](_0x2eebd9):![];try{if(_0x576c53||_0x234f00){if(_0x492e43){if(zkad){if(_0x2c0737){if(_0x43fbcb==![]){var _0x26092a='🎊🍾\x20\x20@'+_0x581c2d[_0x2b327a(0x1eb)]('@')[0x0]+_0x2b327a(0x250);await _0xdb7cf[_0x2b327a(0x1f1)](_0x3c0734,[_0x581c2d],'promote'),_0xdb7cf['sendMessage'](_0x3c0734,{'text':_0x26092a,'mentions':[_0x581c2d]});}else return _0xb390a3('This\x20member\x20is\x20already\x20an\x20administrator\x20of\x20the\x20group.');}else return _0xb390a3('This\x20user\x20is\x20not\x20part\x20of\x20the\x20group.');}else return _0xb390a3('Sorry,\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20I\x20am\x20not\x20an\x20administrator\x20of\x20the\x20group.');}else _0xb390a3('please\x20tag\x20the\x20member\x20to\x20be\x20nominated');}else return _0xb390a3(_0x2b327a(0x1d4));}catch(_0x4fab96){_0xb390a3(_0x2b327a(0x285)+_0x4fab96);}}),king({'nomCom':_0x54493c(0x1ad),'categorie':_0x54493c(0x1e5),'reaction':'👨🏿‍💼'},async(_0x376c53,_0x19813a,_0x143d9c)=>{const _0x4eea11=_0x54493c;let {repondre:_0x2e28f2,msgRepondu:_0x1f6836,infosGroupe:_0x5c12c3,auteurMsgRepondu:_0xa68eea,verifGroupe:_0x2ec8fd,auteurMessage:_0x4ba449,superUser:_0x130d05,idBot:_0x3ed330}=_0x143d9c,_0x591ffb=_0x2ec8fd?await _0x5c12c3['participants']:'';if(!_0x2ec8fd)return _0x2e28f2(_0x4eea11(0x256));const _0x5834fe=_0x5b8290=>{for(const _0x2d1115 of _0x591ffb){if(_0x2d1115['id']!==_0x5b8290)continue;else return!![];}},_0x478577=_0x12f49a=>{const _0x45ef4e=_0x4eea11;let _0x6d883b=[];for(m of _0x12f49a){if(m['admin']==null)continue;_0x6d883b[_0x45ef4e(0x24d)](m['id']);}return _0x6d883b;},_0x46ec83=_0x2ec8fd?_0x478577(_0x591ffb):'';let _0x1580b1=_0x2ec8fd?_0x46ec83[_0x4eea11(0x1cb)](_0xa68eea):![],_0x18562a=_0x5834fe(_0xa68eea),_0x202d1b=_0x2ec8fd?_0x46ec83[_0x4eea11(0x1cb)](_0x4ba449):![];zkad=_0x2ec8fd?_0x46ec83[_0x4eea11(0x1cb)](_0x3ed330):![];try{if(_0x202d1b||_0x130d05){if(_0x1f6836){if(zkad){if(_0x18562a){if(_0x1580b1==![])_0x2e28f2(_0x4eea11(0x280));else{var _0x142c60='@'+_0xa68eea['split']('@')[0x0]+_0x4eea11(0x1d2);await _0x19813a[_0x4eea11(0x1f1)](_0x376c53,[_0xa68eea],_0x4eea11(0x1ad)),_0x19813a[_0x4eea11(0x1fe)](_0x376c53,{'text':_0x142c60,'mentions':[_0xa68eea]});}}else return _0x2e28f2('This\x20user\x20is\x20not\x20part\x20of\x20the\x20group.');}else return _0x2e28f2('Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20I\x20am\x20not\x20an\x20administrator\x20of\x20the\x20group.');}else _0x2e28f2('please\x20tag\x20the\x20member\x20to\x20be\x20removed');}else return _0x2e28f2('Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group.');}catch(_0x18da8c){_0x2e28f2(_0x4eea11(0x285)+_0x18da8c);}}),king({'nomCom':_0x54493c(0x18f),'categorie':_0x54493c(0x1e5),'reaction':_0x54493c(0x1b5)},async(_0x31e804,_0x1cb01e,_0xe4a4d6)=>{const _0x410ff4=_0x54493c;let {repondre:_0x11d233,msgRepondu:_0x432c0d,infosGroupe:_0x5f284a,auteurMsgRepondu:_0x1d7ec6,verifGroupe:_0x3d796e,nomAuteurMessage:_0x2c0211,auteurMessage:_0x552e2b,superUser:_0x107130,idBot:_0x5926fc}=_0xe4a4d6,_0x789c34=_0x3d796e?await _0x5f284a[_0x410ff4(0x200)]:'';if(!_0x3d796e)return _0x11d233(_0x410ff4(0x226));const _0x4bcd8a=_0x5cc244=>{for(const _0x578e06 of _0x789c34){if(_0x578e06['id']!==_0x5cc244)continue;else return!![];}},_0xd78e76=_0x28fd03=>{const _0xc0a844=_0x410ff4;let _0x332c5e=[];for(m of _0x28fd03){if(m[_0xc0a844(0x18d)]==null)continue;_0x332c5e[_0xc0a844(0x24d)](m['id']);}return _0x332c5e;},_0x39b87b=_0x3d796e?_0xd78e76(_0x789c34):'';let _0x418229=_0x3d796e?_0x39b87b[_0x410ff4(0x1cb)](_0x1d7ec6):![],_0x1b5950=_0x4bcd8a(_0x1d7ec6),_0x5791cf=_0x3d796e?_0x39b87b[_0x410ff4(0x1cb)](_0x552e2b):![];zkad=_0x3d796e?_0x39b87b['includes'](_0x5926fc):![];try{if(_0x5791cf||_0x107130){if(_0x432c0d){if(zkad){if(_0x1b5950){if(_0x418229==![]){const _0x3e4ebe=_0x410ff4(0x1a1);var _0x252c38=new Sticker(_0x3e4ebe,{'packALPHA-MD','author':_0x2c0211,'type':StickerTypes[_0x410ff4(0x21c)],'categories':['🤩','🎉'],'id':_0x410ff4(0x24f),'quality':0x32,'background':_0x410ff4(0x236)});await _0x252c38[_0x410ff4(0x1e3)](_0x410ff4(0x1bf));var _0x39da0d='@'+_0x1d7ec6[_0x410ff4(0x1eb)]('@')[0x0]+_0x410ff4(0x1d7);await _0x1cb01e[_0x410ff4(0x1f1)](_0x31e804,[_0x1d7ec6],_0x410ff4(0x18f)),_0x1cb01e['sendMessage'](_0x31e804,{'text':_0x39da0d,'mentions':[_0x1d7ec6]});}else _0x11d233(_0x410ff4(0x210));}else return _0x11d233(_0x410ff4(0x1e4));}else return _0x11d233('Sorry,\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20I\x20am\x20not\x20an\x20administrator\x20of\x20the\x20group.');}else _0x11d233(_0x410ff4(0x203));}else return _0x11d233(_0x410ff4(0x28b));}catch(_0x402600){_0x11d233(_0x410ff4(0x285)+_0x402600);}}),king({'nomCom':_0x54493c(0x1fb),'categorie':_0x54493c(0x1e5),'reaction':'👨🏿‍💼'},async(_0x3cd028,_0x3d021c,_0x536baa)=>{const _0x4cac48=_0x54493c;let {repondre:_0x16aaca,msgRepondu:_0x2f27ee,infosGroupe:_0x3c01a8,auteurMsgRepondu:_0x244c23,verifGroupe:_0x4a1058,nomAuteurMessage:_0x564034,auteurMessage:_0x96e86e,superUser:_0x4dad8a,idBot:_0xe5a0aa}=_0x536baa,_0x2a6b39=_0x4a1058?await _0x3c01a8[_0x4cac48(0x200)]:'';if(!_0x4a1058)return _0x16aaca('for\x20groups\x20only');const _0x137ea1=await message[_0x4cac48(0x24c)](message['jid']),_0x47215f=await isAdmin(_0x137ea1,message[_0x4cac48(0x229)]['user'][_0x4cac48(0x205)]);if(!_0x47215f)return await message[_0x4cac48(0x233)]('_I\x27m\x20not\x20admin._');match=match||message[_0x4cac48(0x1b2)][_0x4cac48(0x205)];if(!match)return await message[_0x4cac48(0x233)](_0x4cac48(0x27d));match=jidToNum(match);const _0x23fe6c=await message['Add'](match);if(_0x23fe6c==_0x4cac48(0x1b6))return await message['send'](_0x4cac48(0x25a));else{if(_0x23fe6c&&_0x23fe6c!='200')return await message['send'](_0x23fe6c,{'quoted':message['data']});}}),king({'nomCom':_0x54493c(0x251),'categorie':'User','reaction':'🧹'},async(_0xb5182d,_0x1994c2,_0x4c6b4f)=>{const _0x57e68a=_0x54493c,{ms:_0xd31d0,repondre:_0x155412,verifGroupe:_0x3f1a5c,auteurMsgRepondu:_0x3bd245,idBot:_0x2e48c4,msgRepondu:_0x1c542f,verifAdmin:_0x388774,superUser:_0x38b7cf}=_0x4c6b4f;if(!_0x1c542f){_0x155412(_0x57e68a(0x242));return;}if(_0x38b7cf&&_0x3bd245==_0x2e48c4){if(_0x3bd245==_0x2e48c4){const _0x1e3ffb={'remoteJid':_0xb5182d,'fromMe':!![],'id':_0xd31d0[_0x57e68a(0x269)]['extendedTextMessage']['contextInfo']['stanzaId']};await _0x1994c2[_0x57e68a(0x1fe)](_0xb5182d,{'delete':_0x1e3ffb});return;}}if(_0x3f1a5c){if(_0x388774||_0x38b7cf)try{const _0x590539={'remoteJid':_0xb5182d,'id':_0xd31d0[_0x57e68a(0x269)][_0x57e68a(0x1cc)][_0x57e68a(0x281)][_0x57e68a(0x208)],'fromMe':![],'participant':_0xd31d0[_0x57e68a(0x269)]['extendedTextMessage']['contextInfo'][_0x57e68a(0x196)]};await _0x1994c2[_0x57e68a(0x1fe)](_0xb5182d,{'delete':_0x590539});return;}catch(_0xd699eb){_0x155412(_0x57e68a(0x25c));}else _0x155412(_0x57e68a(0x1fd));}}),king({'nomCom':_0x54493c(0x1dd),'categorie':_0x54493c(0x1e5)},async(_0x4a9ea0,_0xd21895,_0x2be62d)=>{const _0x37b8ef=_0x54493c,{ms:_0x51e007,repondre:_0x223b5b,verifGroupe:_0x5150d1}=_0x2be62d;if(!_0x5150d1){_0x223b5b(_0x37b8ef(0x225));return;};try{ppgroup=await _0xd21895[_0x37b8ef(0x23a)](_0x4a9ea0,_0x37b8ef(0x27a));}catch{ppgroup=conf[_0x37b8ef(0x1e1)];}const _0x387e43=await _0xd21895['groupMetadata'](_0x4a9ea0);let _0x50f5f3={'image':{'url':ppgroup},'caption':_0x37b8ef(0x21f)+_0x387e43['subject']+'\x0a\x0a*🔩Group\x27s\x20ID:*\x20'+_0x4a9ea0+'\x0a\x0a*🔍Desc:*\x20\x0a\x0a'+_0x387e43[_0x37b8ef(0x1cf)]};_0xd21895['sendMessage'](_0x4a9ea0,_0x50f5f3,{'quoted':_0x51e007});}),king({'nomCom':_0x54493c(0x246),'categorie':'Group','reaction':'🔗'},async(_0x438373,_0x41bf64,_0x3585df)=>{const _0x2fdd9f=_0x54493c;var {repondre:_0x19b3e5,arg:_0x2bd763,verifGroupe:_0x622981,superUser:_0x500b8b,verifAdmin:_0x120d10}=_0x3585df;if(!_0x622981)return _0x19b3e5('*This\x20Command\x20works\x20in\x20Groups\x20Only*');if(_0x500b8b||_0x120d10){const _0x49b54e=await verifierEtatJid(_0x438373);try{if(!_0x2bd763||!_0x2bd763[0x0]||_0x2bd763==='\x20'){_0x19b3e5(_0x2fdd9f(0x213));return;};if(_0x2bd763[0x0]==='on')_0x49b54e?_0x19b3e5(_0x2fdd9f(0x1ba)):(await ajouterOuMettreAJourJid(_0x438373,_0x2fdd9f(0x1ef)),_0x19b3e5('the\x20antilink\x20is\x20activated\x20successfully'));else{if(_0x2bd763[0x0]===_0x2fdd9f(0x216))_0x49b54e?(await ajouterOuMettreAJourJid(_0x438373,_0x2fdd9f(0x1be)),_0x19b3e5(_0x2fdd9f(0x28c))):_0x19b3e5(_0x2fdd9f(0x1e7));else{if(_0x2bd763[_0x2fdd9f(0x276)]('')[_0x2fdd9f(0x1eb)]('/')[0x0]==='action'){let _0x42eed=_0x2bd763[_0x2fdd9f(0x276)]('')['split']('/')[0x1][_0x2fdd9f(0x277)]();_0x42eed==_0x2fdd9f(0x18f)||_0x42eed=='warn'||_0x42eed==_0x2fdd9f(0x1ec)?(await mettreAJourAction(_0x438373,_0x42eed),_0x19b3e5('The\x20anti-link\x20action\x20has\x20been\x20updated\x20to\x20'+_0x2bd763[_0x2fdd9f(0x276)]('')[_0x2fdd9f(0x1eb)]('/')[0x1])):_0x19b3e5(_0x2fdd9f(0x1a7));}else _0x19b3e5(_0x2fdd9f(0x213));}}}catch(_0x4911cd){_0x19b3e5(_0x4911cd);}}else _0x19b3e5('You\x20are\x20not\x20entitled\x20to\x20this\x20order');}),king({'nomCom':_0x54493c(0x24a),'categorie':_0x54493c(0x1e5),'reaction':'🔗'},async(_0x10600e,_0x566d49,_0x39f323)=>{const _0x58d9b9=_0x54493c;var {repondre:_0x3a5226,arg:_0x208137,verifGroupe:_0x54e3d8,superUser:_0x530318,verifAdmin:_0x2ca941}=_0x39f323;if(!_0x54e3d8)return _0x3a5226(_0x58d9b9(0x259));if(_0x530318||_0x2ca941){const _0x7d2e2e=await atbverifierEtatJid(_0x10600e);try{if(!_0x208137||!_0x208137[0x0]||_0x208137==='\x20'){_0x3a5226(_0x58d9b9(0x1ed));return;};if(_0x208137[0x0]==='on')_0x7d2e2e?_0x3a5226(_0x58d9b9(0x1a2)):(await atbajouterOuMettreAJourJid(_0x10600e,_0x58d9b9(0x1ef)),_0x3a5226(_0x58d9b9(0x1f0)));else{if(_0x208137[0x0]===_0x58d9b9(0x216))_0x7d2e2e?(await atbajouterOuMettreAJourJid(_0x10600e,'non'),_0x3a5226(_0x58d9b9(0x1ca))):_0x3a5226(_0x58d9b9(0x211));else{if(_0x208137[_0x58d9b9(0x276)]('')[_0x58d9b9(0x1eb)]('/')[0x0]==='action'){let _0x34da36=_0x208137[_0x58d9b9(0x276)]('')[_0x58d9b9(0x1eb)]('/')[0x1]['toLowerCase']();_0x34da36=='remove'||_0x34da36==_0x58d9b9(0x189)||_0x34da36==_0x58d9b9(0x1ec)?(await mettreAJourAction(_0x10600e,_0x34da36),_0x3a5226(_0x58d9b9(0x198)+_0x208137[_0x58d9b9(0x276)]('')[_0x58d9b9(0x1eb)]('/')[0x1])):_0x3a5226(_0x58d9b9(0x1a7));}else _0x3a5226(_0x58d9b9(0x1ed));}}}catch(_0x1bbc33){_0x3a5226(_0x1bbc33);}}else _0x3a5226('You\x20are\x20not\x20entitled\x20to\x20this\x20order');}),king({'nomCom':'group','categorie':'Group'},async(_0x2d59b8,_0x2275c8,_0x5f4044)=>{const _0x188a8d=_0x54493c,{repondre:_0xfb264d,verifGroupe:_0x377691,verifAdmin:_0x44d46c,superUser:_0x5e7e76,arg:_0x4ff7de}=_0x5f4044;if(!_0x377691){_0xfb264d('order\x20reserved\x20for\x20group\x20only');return;};if(_0x5e7e76||_0x44d46c){if(!_0x4ff7de[0x0]){_0xfb264d(_0x188a8d(0x1f6));return;}const _0x44d4cb=_0x4ff7de['join']('\x20');switch(_0x44d4cb){case _0x188a8d(0x1c1):await _0x2275c8[_0x188a8d(0x234)](_0x2d59b8,_0x188a8d(0x25d)),_0xfb264d(_0x188a8d(0x1db));break;case _0x188a8d(0x247):await _0x2275c8[_0x188a8d(0x234)](_0x2d59b8,_0x188a8d(0x204)),_0xfb264d(_0x188a8d(0x22d));break;default:_0xfb264d(_0x188a8d(0x286));}}else{_0xfb264d(_0x188a8d(0x1a5));return;}}),king({'nomCom':'gname','categorie':_0x54493c(0x1e5)},async(_0x672650,_0x5ec171,_0x2683f6)=>{const _0x8c705d=_0x54493c,{arg:_0xd3f2cb,repondre:_0x3918f4,verifAdmin:_0x2bdab6}=_0x2683f6;if(!_0x2bdab6){_0x3918f4('order\x20reserved\x20for\x20administrators\x20of\x20the\x20group');return;};if(!_0xd3f2cb[0x0]){_0x3918f4(_0x8c705d(0x21a));return;};const _0x3a3d79=_0xd3f2cb[_0x8c705d(0x276)]('\x20');await _0x5ec171[_0x8c705d(0x21e)](_0x672650,_0x3a3d79),_0x3918f4(_0x8c705d(0x19b)+_0x3a3d79+'*');}),king({'nomCom':_0x54493c(0x1b7),'categorie':'Group'},async(_0x16f421,_0x497c9c,_0x2509bd)=>{const _0x2d17af=_0x54493c,{arg:_0x5b8f88,repondre:_0x399ee2,verifAdmin:_0x3040e9}=_0x2509bd;if(!_0x3040e9){_0x399ee2(_0x2d17af(0x237));return;};if(!_0x5b8f88[0x0]){_0x399ee2('Please\x20enter\x20the\x20group\x20description');return;};const _0x2b1639=_0x5b8f88[_0x2d17af(0x276)]('\x20');await _0x497c9c['groupUpdateDescription'](_0x16f421,_0x2b1639),_0x399ee2(_0x2d17af(0x228)+_0x2b1639+'*');}),king({'nomCom':_0x54493c(0x1aa),'categorie':_0x54493c(0x1e5)},async(_0x4d8338,_0x1b4e81,_0x4a8b88)=>{const _0x32e974=_0x54493c,{arg:_0x1c9174,repondre:_0x6d5d11,verifGroupe:_0x47073e,verifAdmin:_0x1d26a4}=_0x4a8b88;if(!_0x1d26a4){_0x6d5d11(_0x32e974(0x1bb));return;};!_0x47073e&&_0x6d5d11(_0x32e974(0x232));;await _0x1b4e81[_0x32e974(0x287)](_0x4d8338),_0x6d5d11(_0x32e974(0x1a4));}),king({'nomCom':_0x54493c(0x1b9),'categorie':_0x54493c(0x1e5)},async(_0x3d5471,_0x548cc4,_0x53bfd5)=>{const _0x43c4ff=_0x54493c,{repondre:_0x4a5695,msgRepondu:_0x545710,verifAdmin:_0x475ce2}=_0x53bfd5;if(!_0x475ce2){_0x4a5695(_0x43c4ff(0x237));return;};if(_0x545710[_0x43c4ff(0x1af)]){const _0x56ff71=await _0x548cc4[_0x43c4ff(0x267)](_0x545710[_0x43c4ff(0x1af)]);await _0x548cc4['updateProfilePicture'](_0x3d5471,{'url':_0x56ff71})[_0x43c4ff(0x214)](()=>{const _0x32f788=_0x43c4ff;_0x548cc4['sendMessage'](_0x3d5471,{'text':'Group\x20pfp\x20changed'}),fs[_0x32f788(0x1c9)](_0x56ff71);})[_0x43c4ff(0x202)](()=>_0x548cc4['sendMessage'](_0x3d5471,{'text':err}));}else _0x4a5695(_0x43c4ff(0x241));}),king({'nomCom':_0x54493c(0x20d),'categorie':_0x54493c(0x1e5),'reaction':'🎤'},async(_0x16f60c,_0x45b07d,_0x132596)=>{const _0xbb4988=_0x54493c,{repondre:_0x1d30f7,msgRepondu:_0x202dee,verifGroupe:_0x364330,arg:_0x3cb0c3,verifAdmin:_0x5569a9,superUser:_0x47ee30}=_0x132596;!_0x364330&&_0x1d30f7(_0xbb4988(0x232));;if(_0x5569a9||_0x47ee30){let _0xf15160=await _0x45b07d[_0xbb4988(0x24c)](_0x16f60c),_0x1fac6b=[];for(const _0x337595 of _0xf15160[_0xbb4988(0x200)]){_0x1fac6b['push'](_0x337595['id']);}if(_0x202dee){console[_0xbb4988(0x244)](_0x202dee);let _0x4d52b7;if(_0x202dee[_0xbb4988(0x1af)]){let _0x2615ce=await _0x45b07d[_0xbb4988(0x267)](_0x202dee[_0xbb4988(0x1af)]);_0x4d52b7={'image':{'url':_0x2615ce},'caption':_0x202dee[_0xbb4988(0x1af)][_0xbb4988(0x272)],'mentions':_0x1fac6b};}else{if(_0x202dee['videoMessage']){let _0x5dd842=await _0x45b07d['downloadAndSaveMediaMessage'](_0x202dee[_0xbb4988(0x201)]);_0x4d52b7={'video':{'url':_0x5dd842},'caption':_0x202dee[_0xbb4988(0x201)][_0xbb4988(0x272)],'mentions':_0x1fac6b};}else{if(_0x202dee[_0xbb4988(0x20a)]){let _0x5769b4=await _0x45b07d['downloadAndSaveMediaMessage'](_0x202dee[_0xbb4988(0x20a)]);_0x4d52b7={'audio':{'url':_0x5769b4},'mimetype':_0xbb4988(0x1d6),'mentions':_0x1fac6b};}else{if(_0x202dee[_0xbb4988(0x1ff)]){let _0x4bbfc9=await _0x45b07d['downloadAndSaveMediaMessage'](_0x202dee[_0xbb4988(0x1ff)]),_0x1d87a0=new Sticker(_0x4bbfc9,{'pack':_0xbb4988(0x1ce),'type':StickerTypes[_0xbb4988(0x258)],'categories':['🤩','🎉'],'id':_0xbb4988(0x24f),'quality':0x46,'background':_0xbb4988(0x1b8)});const _0x1858c6=await _0x1d87a0['toBuffer']();_0x4d52b7={'sticker':_0x1858c6,'mentions':_0x1fac6b};}else _0x4d52b7={'text':_0x202dee[_0xbb4988(0x1fc)],'mentions':_0x1fac6b};}}}_0x45b07d[_0xbb4988(0x1fe)](_0x16f60c,_0x4d52b7);}else{if(!_0x3cb0c3||!_0x3cb0c3[0x0]){_0x1d30f7('Enter\x20the\x20text\x20to\x20announce\x20or\x20mention\x20the\x20message\x20to\x20announce');;return;};_0x45b07d[_0xbb4988(0x1fe)](_0x16f60c,{'text':_0x3cb0c3['join']('\x20'),'mentions':_0x1fac6b});}}else _0x1d30f7(_0xbb4988(0x1f2));}),king({'nomCom':'apk','reaction':'✨','categorie':'Download'},async(_0x27dd70,_0x2692b0,_0x4f1584)=>{const _0x9fe76=_0x54493c,{repondre:_0x301a87,arg:_0x2affe9,ms:_0x8b2178}=_0x4f1584;try{const _0x719b10=_0x2affe9['join']('\x20');if(!_0x719b10)return _0x301a87(_0x9fe76(0x1a3));const _0x44a5d5=await search(_0x719b10);if(_0x44a5d5[_0x9fe76(0x230)]===0x0)return _0x301a87('*can\x27t\x20find\x20application,\x20please\x20enter\x20another\x20name*');const _0x3a8e1d=await download(_0x44a5d5[0x0]['id']),_0x1c94fe=parseInt(_0x3a8e1d['size']);if(_0x1c94fe>0x12c)return _0x301a87(_0x9fe76(0x282));const _0x458a50=_0x3a8e1d['dllink'],_0x5dec52='*🌠ALPHA-MD\x20APPLICATION🌠*\x0a\x0a*Name\x20:*\x20'+_0x3a8e1d[_0x9fe76(0x1a8)]+_0x9fe76(0x25b)+_0x3a8e1d[_0x9fe76(0x1a6)]+_0x9fe76(0x23e)+_0x3a8e1d[_0x9fe76(0x1e8)]+_0x9fe76(0x26f)+_0x3a8e1d[_0x9fe76(0x22e)]+'\x0a',_0x39f412=(_0x3a8e1d?.['name']||'Downloader')+_0x9fe76(0x27e),_0x1ce336=_0x39f412,_0x26eaf2=await axios[_0x9fe76(0x238)](_0x458a50,{'responseType':_0x9fe76(0x1b0)}),_0xe4dda4=fs['createWriteStream'](_0x1ce336);_0x26eaf2[_0x9fe76(0x1f4)][_0x9fe76(0x1d0)](_0xe4dda4),await new Promise((_0x4abc2a,_0x524bb5)=>{const _0x5c3bdb=_0x9fe76;_0xe4dda4['on'](_0x5c3bdb(0x1c8),_0x4abc2a),_0xe4dda4['on']('error',_0x524bb5);});const _0xff05cd={'document':fs[_0x9fe76(0x24e)](_0x1ce336),'mimetype':_0x9fe76(0x227),'fileName':_0x39f412};_0x2692b0['sendMessage'](_0x27dd70,{'image':{'url':_0x3a8e1d['icon']},'caption':_0x5dec52},{'quoted':_0x8b2178}),_0x2692b0[_0x9fe76(0x1fe)](_0x27dd70,_0xff05cd,{'quoted':_0x8b2178}),fs[_0x9fe76(0x1c9)](_0x1ce336);}catch(_0x142036){console[_0x9fe76(0x26a)]('Erreur\x20lors\x20du\x20traitement\x20de\x20la\x20commande\x20apk:',_0x142036),_0x301a87(_0x9fe76(0x1e9));}});function _0x1470(_0x1cabff,_0x59847e){const _0x4a38b9=_0x4a38();return _0x1470=function(_0x1470e4,_0x4a7eac){_0x1470e4=_0x1470e4-0x189;let _0x54383e=_0x4a38b9[_0x1470e4];return _0x54383e;},_0x1470(_0x1cabff,_0x59847e);}function _0x4a38(){const _0x86d31c=['You\x20are\x20not\x20allowed\x20to\x20use\x20this\x20command','*Do\x20you\x20want\x20to\x20turn\x20on\x20disappearing\x20messages?*\x0a\x0aIf\x20yes\x20type\x20_*disap1*\x20for\x20messages\x20to\x20disappear\x20after\x201\x20day._\x0a_or\x20*disap7*\x20for\x20messages\x20to\x20disappear\x20after\x207\x20days._\x0a_or\x20*disap90*\x20for\x20messages\x20to\x20disappear\x20after\x2090\x20days._\x0a\x0a\x20To\x20turn\x20in\x20off,\x20type\x20*disap-off*','👨🏿‍💼','403','gdesc','transparent','gpp','the\x20antilink\x20is\x20already\x20activated\x20for\x20this\x20group','for\x20admins.','\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20*Instructions:*\x20To\x20activate\x20automatic\x20mute,\x20add\x20the\x20minute\x20and\x20hour\x20after\x20the\x20command\x20separated\x20by\x20\x27:\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20Example\x20automute\x209:30\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20To\x20delete\x20the\x20automatic\x20mute,\x20use\x20the\x20command\x20*automute\x20del*','https://chat.whatsapp.com/','non','st.webp','invite','open','delCron','*This\x20command\x20is\x20for\x20groups\x20only*','No\x20time\x20set\x20for\x20automatic\x20mute','You\x20are\x20not\x20entitled\x20to\x20this\x20order','random','approve','finish','unlinkSync','The\x20antibot\x20has\x20been\x20successfully\x20deactivated','includes','extendedTextMessage','You\x20are\x20too\x20weak\x20To\x20do\x20that','ALPHA-MD-tag','desc','pipe','660612zCFVFH','\x20was\x20removed\x20from\x20his\x20position\x20as\x20a\x20group\x20administrator\x0a','\x0a\x0aUse\x20the\x20command\x20approve\x20or\x20reject\x20to\x20approve\x20or\x20reject\x20these\x20join\x20requests.','Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group.','wait\x20bro\x20,\x20you\x20want\x20the\x20link\x20to\x20my\x20dm?','audio/mp4','\x20was\x20removed\x20from\x20the\x20group.\x0a','disap1','axios','You\x20are\x20not\x20an\x20admin\x20here!','Group\x20opened\x20successfully.\x0aNow\x20Participants\x20can\x20send\x20messages.','\x20\x20\x20\x20\x20\x20@','info','promote','the\x20antiword\x20is\x20already\x20activated\x20for\x20this\x20group','635756cNvlXF','IMAGE_MENU','the\x20antiword\x20is\x20activated\x20successfully','toFile','This\x20user\x20is\x20not\x20part\x20of\x20the\x20group.','Group','10hfhEgr','antilink\x20is\x20not\x20activated\x20for\x20this\x20group','lastup','*Error\x20during\x20apk\x20command\x20processing*',';\x20restart\x20to\x20apply\x20the\x20changes','split','delete','antibot\x20on\x20to\x20activate\x20the\x20anti-bot\x20feature\x0aantibot\x20off\x20to\x20deactivate\x20the\x20antibot\x20feature\x0aantibot\x20action/remove\x20to\x20directly\x20remove\x20the\x20bot\x20without\x20notice\x0aantibot\x20action/warn\x20to\x20give\x20warnings\x0aantilink\x20action/delete\x20to\x20remove\x20the\x20bot\x20message\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-bot\x20feature\x20is\x20set\x20to\x20delete.','action','oui','the\x20antibot\x20is\x20successfully\x20activated','groupParticipantsUpdate','Command\x20reserved\x20for\x20administrators.','antiword\x20is\x20not\x20activated\x20for\x20this\x20group','data','172davbHE','Instructions:\x0a\x0aType\x20group\x20open\x20or\x20close','\x0a*KEEP\x20USING\x20ALPHA-MD*','The\x20automatic\x20mute\x20has\x20been\x20removed;\x20restart\x20to\x20apply\x20changes','5050gGWobG','checkFromHentaiList','add','conversation','Sorry,\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group.','sendMessage','stickerMessage','participants','videoMessage','catch','please\x20tag\x20the\x20member\x20to\x20be\x20removed','announcement','jid','You\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group','addToHentaiList','stanzaId','all\x20pending\x20participants\x20have\x20been\x20approved\x20to\x20join.','audioMessage','entries','\x20🚀\x20\x0a👤\x20Author\x20:\x20*','hidetag','7yvucrn','Look,\x20type\x20antilink-all\x20on\x20to\x20activate\x20the\x20antilink-all\x20feature\x0aor\x20antilink-all\x20off\x20to\x20deactivate\x20the\x20antilink-all\x20feature\x0aor\x20antilink-all\x20action/remove\x20to\x20directly\x20remove\x20the\x20link\x20without\x20notice\x0aor\x20antilink-all\x20action/warn\x20to\x20give\x20warnings\x0aor\x20antilink-all\x20action/delete\x20to\x20remove\x20the\x20link\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20antilink-all\x20feature\x20is\x20set\x20to\x20delete.\x0a\x0a*KEEP\x20USING\x20ALPHA-MD\x20🤍*','This\x20member\x20cannot\x20be\x20removed\x20because\x20he\x20is\x20an\x20administrator\x20of\x20the\x20group.','antibot\x20is\x20not\x20activated\x20for\x20this\x20group','../data/antibot','antilink\x20on\x20to\x20activate\x20the\x20anti-link\x20feature\x0aantilink\x20off\x20to\x20deactivate\x20the\x20anti-link\x20feature\x0aantilink\x20action/remove\x20to\x20directly\x20remove\x20the\x20link\x20without\x20notice\x0aantilink\x20action/warn\x20to\x20give\x20warnings\x0aantilink\x20action/delete\x20to\x20remove\x20the\x20link\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-link\x20feature\x20is\x20set\x20to\x20delete.','then','forEach','off','22BjBxLL','206240BfmObU','map','Please\x20enter\x20the\x20group\x20name','automute','FULL','antiword\x20on\x20to\x20activate\x20the\x20anti-word\x20feature\x0aantiword\x20off\x20to\x20deactivate\x20the\x20anti-word\x20feature\x0aantiword\x20action/remove\x20to\x20directly\x20remove\x20the\x20word\x20sender\x20without\x20notice\x0aantiword\x20action/warn\x20to\x20give\x20warnings\x0aantiword\x20action/delete\x20to\x20remove\x20the\x20word\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-word\x20feature\x20is\x20set\x20to\x20delete.','groupUpdateSubject','*━━━━『GROUP\x20INFO』━━━━*\x0a\x0a*🎐Name:*\x20','The\x20antilink-all\x20has\x20been\x20successfully\x20deactivated','*𝐀𝐋𝐏𝐇𝐀-𝐌𝐃\x20𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓*\x0a\x0a🀄\x20Message:\x20','there\x20are\x20no\x20pending\x20join\x20requests\x20for\x20this\x20group.','\x20\x0a\x0a\x0aClick\x20Here\x20To\x20Join\x20:','NSFW\x20content\x20is\x20already\x20disabled\x20for\x20this\x20group','order\x20reserved\x20for\x20the\x20group\x20only','for\x20groups\x20only','application/vnd.android.package-archive','group\x20description\x20update:\x20*','client','getCronById','../france/king','You\x20are\x20not\x20an\x20admin\x20here,\x20what\x20will\x20you\x20do\x20if\x20there\x20are\x20pending\x20requests?!','Group\x20closed\x20successfully','size','autounmute','length','NSFW\x20content\x20is\x20already\x20active\x20for\x20this\x20group','This\x20command\x20is\x20only\x20allowed\x20in\x20groups.','send','groupSettingUpdate','slice','#000000','order\x20reserved\x20for\x20administrators\x20of\x20the\x20group','get','pm2\x20restart\x20all','profilePictureUrl','*\x20*State:*\x20','No\x20cronometrage\x20has\x20been\x20activated','unmute_at','\x0a*Last\x20Update\x20:*\x20','antiword\x20on\x20to\x20activate\x20the\x20anti-word\x20feature\x0aantiword\x20off\x20to\x20deactivate\x20the\x20anti-word\x20feature\x0aantiword\x20action/remove\x20to\x20directly\x20remove\x20the\x20sender\x20without\x20notice\x0aantiword\x20action/warn\x20to\x20give\x20warnings\x0aantiword\x20action/delete\x20to\x20remove\x20the\x20word\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20anti-word\x20feature\x20is\x20set\x20to\x20delete.','\x20;\x20restart\x20to\x20apply\x20changes','Please\x20mention\x20an\x20image','Please\x20mention\x20the\x20message\x20to\x20delete.','Sorry,\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group','log','This\x20command\x20works\x20in\x20groups\x20only','antilink','close','2560688SnNAtL','the\x20antilink-all\x20is\x20activated\x20successfully','antibot','antilink-all\x20is\x20already\x20activated\x20for\x20this\x20group','groupMetadata','push','readFileSync','12345','\x20Has\x20been\x20promoted\x20as\x20a\x20group\x20Admin.','del','Setting\x20up\x20automatic\x20mute\x20for\x20','mute_at','Aucun\x20Message','../data/cron','For\x20groups\x20only','startsWith','CROPPED','*for\x20groups\x20only*','_Failed,\x20Invite\x20sent_','\x0a*Id\x20:*\x20','I\x20need\x20admin\x20rights.','not_announcement','../data/antilien','6VCCNdc','========================\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20🌟\x20*ALPHA-MD*\x20🌟\x0a========================\x0a\x0a👥\x20Group\x20:\x20','Dissapearing\x20messages\x20successfully\x20turned\x20off!','groupRequestParticipantsList','reject','*\x20👋\x20\x0a📜\x20Message\x20:\x20*','Dissapearing\x20messages\x20successfully\x20turned\x20on\x20for\x207\x20days!','The\x20anti-word\x20action\x20has\x20been\x20updated\x20to\x20','downloadAndSaveMediaMessage','\x20contacts\x20into\x20a\x20vcf...','message','error','BEGIN:VCARD\x0aVERSION:3.0\x0aFN:[','addCron','type\x20antilink-all\x20on\x20to\x20activate\x20the\x20antilink-all\x20feature\x0aor\x20antilink-all\x20off\x20to\x20deactivate\x20the\x20antilink-all\x20feature\x0aThen\x20antilink-all\x20action/remove\x20to\x20directly\x20remove\x20the\x20link\x20without\x20notice\x0aor\x20antilink-all\x20action/warn\x20to\x20give\x20warnings\x0aor\x20antilink-all\x20action/delete\x20to\x20remove\x20the\x20link\x20without\x20any\x20sanctions\x0a\x0aPlease\x20note\x20that\x20by\x20default,\x20the\x20antilink-all\x20feature\x20is\x20set\x20to\x20delete.','Sorry,\x20you\x20cannot\x20enable\x20NSFW\x20content\x20without\x20being\x20an\x20administrator\x20of\x20the\x20group','\x0a*Size\x20:*\x20','removeFromHentaiList','groupToggleEphemeral','caption','A\x20moment,\x20*FLASH-MD*\x20Is\x20compiling\x20','\x0aTotal\x20Contacts:\x20','floor','join','toLowerCase','there\x20are\x20no\x20pending\x20join\x20requests.','writeFileSync','image','Hello\x20','NSFW\x20content\x20is\x20now\x20disabled\x20for\x20this\x20group','Example\x20:\x20add\x20254757835036','.apk','*\x20📝\x0a========================\x0a\x0a\x0a\x0a\x0a','This\x20member\x20is\x20not\x20a\x20group\x20administrator.','contextInfo','The\x20file\x20exceeds\x20300\x20MB,\x20unable\x20to\x20download.','No\x20cronometrage\x20is\x20active','The\x20autounmute\x20has\x20been\x20removed;\x20restart\x20to\x20apply\x20the\x20changes','oups\x20','Please\x20don\x27t\x20invent\x20an\x20option','groupRevokeInvite','subject','The\x20anti-link\x20action\x20has\x20been\x20updated\x20to\x20','disap7','Sorry\x20I\x20cannot\x20perform\x20this\x20action\x20because\x20you\x20are\x20not\x20an\x20administrator\x20of\x20the\x20group\x20.','The\x20antilink\x20has\x20been\x20successfully\x20deactivated','\x0a\x20\x20\x20\x20\x20\x20*\x20*Instructions:*\x20To\x20activate\x20autounmute,\x20add\x20the\x20minute\x20and\x20hour\x20after\x20the\x20command\x20separated\x20by\x20\x27:\x27\x0a\x20\x20\x20\x20\x20\x20Example\x20autounmute\x207:30\x0a\x20\x20\x20\x20\x20\x20*\x20To\x20delete\x20autounmute,\x20use\x20the\x20command\x20*autounmute\x20del*','Dissapearing\x20messages\x20successfully\x20turned\x20on\x20for\x2024\x20hours','Please\x20enter\x20a\x20valid\x20time\x20with\x20hour\x20and\x20minute\x20separated\x20by\x20:','warn','\x0aTEL;type=CELL;type=VOICE;waid=','all\x20pending\x20join\x20requests\x20have\x20been\x20rejected.',']\x20+','admin','The\x20group\x20will\x20be\x20un-muted\x20at\x20','remove','✋🏿\x20✋🏿this\x20command\x20works\x20in\x20groups\x20only\x20❌','1675926UvHMVZ','disap-off','antilink-all','VCF\x20for\x20','Setting\x20up\x20autounmute\x20for\x20','participant','antiword','The\x20anti-bot\x20action\x20has\x20been\x20updated\x20to\x20','\x20,\x20here\x20is\x20the\x20group\x20link\x20of\x20','\x0a\x0a🗣️\x20Author:\x20','group\x20name\x20refresh:\x20*','No\x20time\x20set\x20for\x20autounmute','3984450rEiFbn','You\x20must\x20enter\x20\x22on\x22\x20or\x20\x22off\x22','FMD','*FLASH-MD\x20is\x20sending\x20this\x20message\x20to\x20all\x20groups\x20you\x20are\x20in*...','https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif','the\x20antibot\x20is\x20already\x20activated\x20for\x20this\x20group','*Enter\x20the\x20name\x20of\x20the\x20application\x20to\x20search\x20for*','group\x20link\x20revoked.','This\x20command\x20is\x20for\x20admins\x20only!','package','The\x20only\x20actions\x20available\x20are\x20warn,\x20remove,\x20and\x20delete','name','disap90','revoke','Dissapearing\x20messages\x20successfully\x20turned\x20on\x20for\x2090\x20days!','The\x20antiword\x20has\x20been\x20successfully\x20deactivated','demote','☑️\x20','imageMessage','stream','.Vcf','reply_message'];_0x4a38=function(){return _0x86d31c;};return _0x4a38();}const cron=require(_0x54493c(0x255));king({'nomCom':_0x54493c(0x21b),'categorie':'Group'},async(_0x444245,_0x2934b,_0x4eecb5)=>{const _0x4b2704=_0x54493c,{arg:_0x4106f1,repondre:_0x934e06,verifAdmin:_0x3fde41}=_0x4eecb5;if(!_0x3fde41){_0x934e06(_0x4b2704(0x206));return;}group_cron=await cron[_0x4b2704(0x22a)](_0x444245);if(!_0x4106f1||_0x4106f1[_0x4b2704(0x230)]==0x0){let _0x1d5ff9;group_cron==null||group_cron[_0x4b2704(0x253)]==null?_0x1d5ff9=_0x4b2704(0x1c4):_0x1d5ff9='The\x20group\x20will\x20be\x20muted\x20at\x20'+group_cron[_0x4b2704(0x253)]['split'](':')[0x0]+'\x20'+group_cron[_0x4b2704(0x253)]['split'](':')[0x1];let _0x8a8f69=_0x4b2704(0x23b)+_0x1d5ff9+_0x4b2704(0x1bc);_0x934e06(_0x8a8f69);return;}else{let _0x24e77e=_0x4106f1['join']('\x20');if(_0x24e77e[_0x4b2704(0x277)]()==='del')group_cron==null?_0x934e06(_0x4b2704(0x283)):(await cron[_0x4b2704(0x1c2)](_0x444245),_0x934e06(_0x4b2704(0x1f8))[_0x4b2704(0x214)](()=>{const _0x1edc86=_0x4b2704;exec(_0x1edc86(0x239));}));else _0x24e77e[_0x4b2704(0x1cb)](':')?(await cron[_0x4b2704(0x26c)](_0x444245,_0x4b2704(0x253),_0x24e77e),_0x934e06(_0x4b2704(0x252)+_0x24e77e+_0x4b2704(0x240))[_0x4b2704(0x214)](()=>{const _0x39e45b=_0x4b2704;exec(_0x39e45b(0x239));})):_0x934e06('Please\x20enter\x20a\x20valid\x20time\x20with\x20hour\x20and\x20minute\x20separated\x20by\x20:');}}),king({'nomCom':_0x54493c(0x22f),'categorie':'Group'},async(_0x3d99a0,_0xab3213,_0xc7b6c9)=>{const _0x588792=_0x54493c,{arg:_0x4301f6,repondre:_0x3df118,verifAdmin:_0x3aeb6a}=_0xc7b6c9;if(!_0x3aeb6a){_0x3df118(_0x588792(0x206));return;}group_cron=await cron['getCronById'](_0x3d99a0);if(!_0x4301f6||_0x4301f6['length']==0x0){let _0x2b7be9;group_cron==null||group_cron[_0x588792(0x23d)]==null?_0x2b7be9=_0x588792(0x19c):_0x2b7be9=_0x588792(0x18e)+group_cron[_0x588792(0x23d)]['split'](':')[0x0]+'H\x20'+group_cron['unmute_at']['split'](':')[0x1];let _0x3df4ba=_0x588792(0x23b)+_0x2b7be9+_0x588792(0x28d);_0x3df118(_0x3df4ba);return;}else{let _0x42ff3c=_0x4301f6[_0x588792(0x276)]('\x20');if(_0x42ff3c[_0x588792(0x277)]()==='del')group_cron==null?_0x3df118(_0x588792(0x23c)):(await cron['delCron'](_0x3d99a0),_0x3df118(_0x588792(0x284))[_0x588792(0x214)](()=>{exec('pm2\x20restart\x20all');}));else _0x42ff3c['includes'](':')?(await cron[_0x588792(0x26c)](_0x3d99a0,_0x588792(0x23d),_0x42ff3c),_0x3df118(_0x588792(0x195)+_0x42ff3c+_0x588792(0x1ea))[_0x588792(0x214)](()=>{exec('pm2\x20restart\x20all');})):_0x3df118(_0x588792(0x28f));}}),king({'nomCom':'fkick','categorie':_0x54493c(0x1e5)},async(_0x57c236,_0x1171b1,_0x17357a)=>{const _0x23edbf=_0x54493c,{arg:_0x2fce5f,repondre:_0x19f8d1,verifAdmin:_0x4145c4,superUser:_0xe5451b,verifZokouAdmin:_0x1045af}=_0x17357a;if(_0x4145c4||_0xe5451b){if(!_0x1045af){_0x19f8d1('You\x20need\x20administrative\x20rights\x20to\x20perform\x20this\x20command');return;}if(!_0x2fce5f||_0x2fce5f[_0x23edbf(0x230)]==0x0){_0x19f8d1('Please\x20enter\x20the\x20country\x20code\x20whose\x20members\x20will\x20be\x20removed');return;}let _0x569ebc=await _0x1171b1[_0x23edbf(0x24c)](_0x57c236),_0x4671eb=_0x569ebc[_0x23edbf(0x200)];for(let _0x40524f=0x0;_0x40524f<_0x4671eb[_0x23edbf(0x230)];_0x40524f++){_0x4671eb[_0x40524f]['id'][_0x23edbf(0x257)](_0x2fce5f[0x0])&&_0x4671eb[_0x40524f][_0x23edbf(0x18d)]===null&&await _0x1171b1[_0x23edbf(0x1f1)](_0x57c236,[_0x4671eb[_0x40524f]['id']],_0x23edbf(0x18f));}}else _0x19f8d1(_0x23edbf(0x243));}),king({'nomCom':'nsfw','categorie':_0x54493c(0x1e5)},async(_0x28c09c,_0x4427ee,_0x1e9ef3)=>{const _0x1d8498=_0x54493c,{arg:_0x25a647,repondre:_0x4cbac3,verifAdmin:_0x5005ac}=_0x1e9ef3;if(!_0x5005ac){_0x4cbac3(_0x1d8498(0x26e));return;}let _0x3eff52=require('../data/hentai'),_0x3ce3ab=await _0x3eff52[_0x1d8498(0x1fa)](_0x28c09c);if(_0x25a647[0x0]=='on'){if(_0x3ce3ab){_0x4cbac3(_0x1d8498(0x231));return;};await _0x3eff52[_0x1d8498(0x207)](_0x28c09c),_0x4cbac3('NSFW\x20content\x20is\x20now\x20active\x20for\x20this\x20group');}else{if(_0x25a647[0x0]==_0x1d8498(0x216)){if(!_0x3ce3ab){_0x4cbac3(_0x1d8498(0x224));return;};await _0x3eff52[_0x1d8498(0x270)](_0x28c09c),_0x4cbac3(_0x1d8498(0x27c));}else _0x4cbac3(_0x1d8498(0x19e));}}),king({'nomCom':_0x54493c(0x197),'categorie':_0x54493c(0x1e5),'reaction':'🔗'},async(_0x19997a,_0x2151a6,_0x391bbd)=>{const _0x294bf3=_0x54493c;var {repondre:_0x49b599,arg:_0x264587,verifGroupe:_0x4f54f9,superUser:_0x4d4ce7,verifAdmin:_0x339195}=_0x391bbd;if(!_0x4f54f9)return _0x49b599(_0x294bf3(0x1c3));if(_0x4d4ce7||_0x339195){const _0x27c90d=await verifierEtatJid(_0x19997a);try{if(!_0x264587||!_0x264587[0x0]||_0x264587==='\x20'){_0x49b599(_0x294bf3(0x23f));return;};if(_0x264587[0x0]==='on')_0x27c90d?_0x49b599(_0x294bf3(0x1df)):(await ajouterOuMettreAJourJid(_0x19997a,_0x294bf3(0x1ef)),_0x49b599(_0x294bf3(0x1e2)));else{if(_0x264587[0x0]===_0x294bf3(0x216))_0x27c90d?(await ajouterOuMettreAJourJid(_0x19997a,_0x294bf3(0x1be)),_0x49b599(_0x294bf3(0x1ac))):_0x49b599(_0x294bf3(0x1f3));else{if(_0x264587['join']('')[_0x294bf3(0x1eb)]('/')[0x0]===_0x294bf3(0x1ee)){let _0x4d4acb=_0x264587['join']('')[_0x294bf3(0x1eb)]('/')[0x1][_0x294bf3(0x277)]();_0x4d4acb==_0x294bf3(0x18f)||_0x4d4acb==_0x294bf3(0x189)||_0x4d4acb=='delete'?(await mettreAJourAction(_0x19997a,_0x4d4acb),_0x49b599(_0x294bf3(0x266)+_0x264587[_0x294bf3(0x276)]('')[_0x294bf3(0x1eb)]('/')[0x1])):_0x49b599('The\x20only\x20actions\x20available\x20are\x20warn,\x20remove,\x20and\x20delete');}else _0x49b599(_0x294bf3(0x21d));}}}catch(_0x36d395){_0x49b599(_0x36d395);}}else _0x49b599(_0x294bf3(0x1c5));}),king({'nomCom':_0x54493c(0x193),'categorie':'Group','reaction':'🔗'},async(_0x361fd1,_0x130af0,_0x35d3de)=>{const _0xbb745e=_0x54493c;var {repondre:_0x4d7c89,arg:_0x1cb91f,verifGroupe:_0x26e001,superUser:_0x145176,verifAdmin:_0x2c8ecb}=_0x35d3de;if(!_0x26e001)return _0x4d7c89('*This\x20Command\x20works\x20in\x20Groups\x20Only*');if(_0x145176||_0x2c8ecb){const _0x49977a=await verifierEtatJid(_0x361fd1);try{if(!_0x1cb91f||!_0x1cb91f[0x0]||_0x1cb91f==='\x20'){_0x4d7c89(_0xbb745e(0x26d));return;};if(_0x1cb91f[0x0]==='on')_0x49977a?_0x4d7c89(_0xbb745e(0x24b)):(await ajouterOuMettreAJourJid(_0x361fd1,_0xbb745e(0x1ef)),_0x4d7c89(_0xbb745e(0x249)));else{if(_0x1cb91f[0x0]==='off')_0x49977a?(await ajouterOuMettreAJourJid(_0x361fd1,'non'),_0x4d7c89(_0xbb745e(0x220))):_0x4d7c89('antilink-all\x20is\x20not\x20activated\x20for\x20this\x20group');else{if(_0x1cb91f[_0xbb745e(0x276)]('')[_0xbb745e(0x1eb)]('/')[0x0]===_0xbb745e(0x1ee)){let _0x21f427=_0x1cb91f['join']('')[_0xbb745e(0x1eb)]('/')[0x1]['toLowerCase']();_0x21f427=='remove'||_0x21f427==_0xbb745e(0x189)||_0x21f427==_0xbb745e(0x1ec)?(await mettreAJourAction(_0x361fd1,_0x21f427),_0x4d7c89(_0xbb745e(0x289)+_0x1cb91f['join']('')['split']('/')[0x1])):_0x4d7c89(_0xbb745e(0x1a7));}else _0x4d7c89(_0xbb745e(0x20f));}}}catch(_0x46e41f){_0x4d7c89(_0x46e41f);}}else _0x4d7c89(_0xbb745e(0x1b3));});


