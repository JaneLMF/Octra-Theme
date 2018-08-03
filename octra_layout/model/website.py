from odoo import api, fields, models
from odoo.tools.translate import _
from odoo.http import request
 
class website(models.Model):
     
    _inherit = "website"
    
    octra_header_style_one = fields.Char('octra Heading')
    octra_header_style_two = fields.Char("octra header style2")
     
    def category_check(self,filter=[]):
         
        if filter:
            filter.extend([('is_website_published','=',True)])
        else:
            filter=([('is_website_published','=',True)])
         
        return self.env['product.public.category'].sudo().search(filter)
       
    def get_res_lang(self):
        
        current_lang= request.env.lang
        
        res_lang = request.env['res.lang'].search([('code','=',current_lang)])
