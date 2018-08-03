from odoo import http, _
from odoo.http import request
from odoo.addons.website_sale.controllers.main import WebsiteSale       

class octraRating(WebsiteSale):
    
    @http.route([
        '/shop',
        '/shop/page/<int:page>',
        '/shop/category/<model("product.public.category"):category>',
        '/shop/category/<model("product.public.category"):category>/page/<int:page>'
    ], type='http', auth="public", website=True)
    def shop(self, page=0, category=None, search='', ppg=False, **post):
        response = super(octraRating, self).shop(page=page, category=category, search=search, **post)
        Rating = request.env['rating.rating']
        products = response.qcontext['products']
        rating_templates = {}
        for product in products :
            ratings = Rating.search([('message_id', 'in', product.website_message_ids.ids)])#             rating_message_values = dict([(record.message_id.id, record.rating) for record in ratings])
            rating_product = product.rating_get_stats([('website_published', '=', True)])
            rating_templates[product.id] = rating_product
            response.qcontext['rating_product'] = rating_templates
        return response 
    
