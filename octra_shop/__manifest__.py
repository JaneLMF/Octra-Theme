{
    # Theme information
    'name' : 'Octra Shop',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Showcase Products in Unique Style at your Online Store',
    'description': """""",

    # Dependencies
     'depends': [
         'octra_layout'
     ],

    # Views
    'data': [
		'security/ir.model.access.csv', 
        'templates/template.xml',
        'templates/assets.xml',
        'view/product_label.xml',

    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
