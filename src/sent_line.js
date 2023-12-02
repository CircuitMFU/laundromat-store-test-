const sendSignalToLineGroup = async (message) => {

    // ส่งข้อมูลไปยัง Backend (node.js)
    //เป็นเพียงตัวอย่าง ปกติต้องตรวจสอบเวลาที่ server 
    await fetch('https://11d6-183-88-21-107.ngrok-free.app/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message }) // ส่งข้อความไปยัง Backend
    });

    console.log(`Signal sent to Line group: ${message}`);
};
export default sendSignalToLineGroup