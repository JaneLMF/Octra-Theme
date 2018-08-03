{
    # Theme information
    'name' : 'Octra Rating',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Show Product Rating in Category Page',
    'description': """""",

    # Dependencies
    'depends': [
        'website_rating',
        'octra_shop',
        'octra_product_carousel',
    ],

    # Views
    'data': [
        'templates/template.xml',
        'templates/assets.xml',
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
