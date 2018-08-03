{
    # Theme information
    'name' : 'Octra Gallery',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Show image gallery as per category',
    'description': """""",

    # Dependencies
    'depends': [
        'octra_carousel','octra_business_snippets'
    ],

    # Views
    'data': [
        'security/ir.model.access.csv',	
        'templates/assets.xml',
        'templates/gallery_option.xml',
        'templates/gallery_carousel.xml',
        'views/portfolio_view.xml',
        'views/portfolio_category_view.xml',
        'views/multi_img.xml',
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
