let Student = {
    id: 101,
    sname: "Meet Arora",
    age: 20,
    isWorking: false,
    img:"C:\BCA_MEET_2242000321\PROJ2\meet.jpg"
}

let{id,sname,age,isWorking,img} = Student

let info =`
    <h1>Welcome</h1>
    <img src="${img}" alt="No image" height="100px" width="100px">
    <h2>ID: ${id}</h2>
    <h2>Name: ${sname}</h2>
    <h3>Age: ${age} yr old </h3>
    <h3>Working/Student: ${isWorking ? "Working Profession": "Student"}

`
document.write(info)