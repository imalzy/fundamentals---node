const fs = require('fs');
// Read File
// fs.readFile('note.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })
// Write File
// fs.writeFile('note.txt', 'A new message is coming' ,(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })
// Append File
// fs.appendFile('note.txt', ' to A new message is coming' ,(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })

// Delete File
// if(fs.existsSync('note.txt')){
//     fs.unlink('note.txt' ,(err, data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Delete File Success');
//         }
//     })
// }else{
//     console.log('No File Exist');
// }

// Create Folder
// if(!fs.existsSync('newFolder')){
//     fs.mkdir('newFolder' ,(err, data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('new folder');
//         }
//     })
// }else{
//     console.log('exist');
// }

// Delete Folder
// if(fs.existsSync('newFolder')){
//     fs.rmdir('newFolder' ,(err, data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Delete Success');
//         }
//     })
// }else{
//     console.log('No Folder Already Exist');
// }

// readSteam

const readSteam = fs.createReadStream('largeFile.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('WriteStream.txt');
// readSteam.on('data', (chunk) => {
//   console.log(chunk);

//   writeStream.write('\n New chunk \n');
//   writeStream.write(chunk);
// });

// stream pipe

readSteam.pipe(writeStream)

