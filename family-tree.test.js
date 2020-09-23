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

})