{
    # Theme information
    'name' : 'Octra Employee Carousel',
    'category' : 'Website',
    'version' : '1.0',
    'summary': 'Contains 4 different styles for employee carousel',
    'description': """""",

    # Dependencies
    'depends': [
        'octra_carousel','website_hr','octra_business_snippets',
    ],

    # Views
    'data': [
        'templates/assets.xml',
        'templates/employee_carousel_snippet.xml',
        'templates/employee_carousel_option.xml',
        'view/hr_employee.xml'
    ],

    # Author
    'author': 'Emipro Technologies Pvt. Ltd.',
    'website': 'http://www.emiprotechnologies.com',

    # Technical
    'installable': True,
}
