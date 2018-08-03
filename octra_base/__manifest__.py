{
    # Theme information
    'name' : 'Octra Base',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Contains Common Design Styles for Theme octra',
    'description': """""",

    # Dependencies
    'depends': [
        'website_sale','website_blog','auth_signup','website_sale_delivery'
    ],

    # Views
    'data': [
        'templates/assets.xml',
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
    'application': False,
}
