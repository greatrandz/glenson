const dashboardScreen = () => {
    let arrayValue = ['Randolf', 'Glenson']
    const FullNameArray = arrayValue.map(firstname => { 
        return { firstname, lastname: 'Dini-ay' }
    })
    console.log(FullNameArray)
}