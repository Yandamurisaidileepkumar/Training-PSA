let emp = [{ id: 101, name: "dileep", salary: 45000 },
{ id: 102, name: "kumar", salary: 40000 },
{ id: 103, name: "hari", salary: 50000 }]
let createEmp = (emp) => {
    setTimeout(() => {
        emp.push(emp);

    }, 2000);
}
let getEmp = () => {
    setTimeout(() => {

    }
}
console.log(emp);