from odoo import api, fields, models
 
class product_public_category(models.Model):
    _inherit = ["product.public.category"]
     
    is_website_published = fields.Boolean("Website Published",default=True)
    
    

