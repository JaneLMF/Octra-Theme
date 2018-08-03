{
    # Theme information
    'name' : 'Octra Customer Carousel',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Contains 5 different styles for customer review',
    'description': """""",

    # Dependencies
    'depends': [
        'octra_carousel','octra_business_snippets'
    ],

    # Views
    'data': [
         'templates/assets.xml',
         'templates/customer_carousel_snippet.xml',
         'templates/customer_carousel_snippent_option.xml',
         'view/res_partner.xml'
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
