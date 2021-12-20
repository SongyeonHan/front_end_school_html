<script>
    'use strict';

    str = "hello strict";
    var undefined = "undefined";
    console.log(undefined);
    var Infinity = 100;
    console.log(Infinity);
    Math.PI = 0;

    const Employee = {
        firstname: "jaehyun",
        lastname: 'han'
    }

    console.log(Employee.firstname);
    delete Employee.firstname;
    console.log(Employee.firstname);

    delete Object.prototype;

    function myFunc(a, a, b) {
        console.log(a + a + b);
    }

    myFunc(1, 2, 3);

</script>