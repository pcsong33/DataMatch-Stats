

function fooBar(num)
{
    for (i = 1; i < num + 1; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
            console.log("FooBar");
        }

        else if (i % 5 === 0)
        {
            console.log("Bar");
        }

        else if (i % 3 === 0)
        {
            console.log("Foo");
        }
        else{
            console.log(i);
        }
    }
}

fooBar(20)

