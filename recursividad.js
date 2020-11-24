const countDown = num => {
    if ( num <= 0 ) return false;
    console.log( num )
    countDown( num-1 )
}

countDown(10)