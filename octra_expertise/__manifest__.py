{
    # Theme information
    'name' : 'Octra Expertise',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Show expertise of your company using progress bar',
    'description': """""",

    # Dependencies
    'depends': [
        'website_hr'
    ],

    # Views
    'data': [
        'templates/template.xml',
        'templates/assets.xml',
        'views/res_company.xml',
        'security/ir.model.access.csv',
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
