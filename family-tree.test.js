const familyTree = require('./family-tree.js')

describe('Family Tree', function () 
{
    test('I am in my family tree', function() 
    {
        const me= familyTree[0]
        expect(me.name).toEqual('Keratuwe')
    })

    test('Cousin is also there', function() 
    {
        const cousin= familyTree[1]
        expect(cousin.name).toEqual('Ntsana')
    })

    test('Mum is also there', function() 
    {
        const mum = familyTree[0].parents[0]
        expect(mum.name).toEqual('Lebohang')
    })

    test('Oldest Aunt is also there', function() 
    {
        const aunt1 = familyTree[1].parents[0]
        expect(aunt1.name).toEqual('Mohau')
    })

    test('Middle Aunt is also there', function() 
    {
        const aunt2= familyTree[4]
        expect(aunt2.name).toEqual('Mamello')
    })

    test('Grandma is also there', function() 
    {
        const grandma = familyTree[4].parents[0]
        expect(grandma.name).toEqual('Ellen')
    })

    test('Grandpa is also there', function() 
    {
        const grandpa = familyTree[2].parents[1]
        expect(grandpa.name).toEqual('Ernest')
    })



})

describe('Generations', function () 
{
    test('I am in 1st Generation', function() 
    {
        const me = familyTree[0]
        expect(me.generation).toEqual(1)
    })

    test('Cousin is also 1st Generation', function() 
    {
        const cousin= familyTree[1]
        expect(cousin.generation).toEqual(1)
    })

    test('Mum is 2nd Generation', function() 
    {
        const mum = familyTree[0].parents[0]
        expect(mum.generation).toEqual(2)
    })

    test('Oldest Aunt is also 2nd Generation', function() 
    {
        const aunt1 = familyTree[1].parents[0]
        expect(aunt1.generation).toEqual(2)
    })

    test('Middle Aunt is also 2nd Generation', function() 
    {
        const aunt2= familyTree[4]
        expect(aunt2.generation).toEqual(2)
    })

    test('Grandma is 3rd Generation', function() 
    {
        const grandma = familyTree[4].parents[0]
        expect(grandma.generation).toEqual(3)
    })

    test('Grandpa is also 3rd Generation', function() 
    {
        const grandpa = familyTree[2].parents[1]
        expect(grandpa.generation).toEqual(3)
    })
})