const constumers = [
    { id:1, name: 'Juan', status:'Active' },
    { id:2, name: 'Pedro', status: 'Inactive'},
    { id:3, name: 'Julian', status: 'Inactive'},
    { id:4, name: 'Luis', status: 'Active'}
];

const constumersActive = constumers.filter(constumer => constumer.status === 'Active');
console.log(constumersActive,'Active');
console.log(constumers)