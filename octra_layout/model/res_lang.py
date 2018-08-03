from odoo import fields,models

class website_lang(models.Model):
    _inherit = 'res.lang'
    
    lang_flag = fields.Binary('Image')