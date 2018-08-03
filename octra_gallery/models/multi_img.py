from odoo import models, fields, api, _

class MultiImg(models.Model):
    _name = 'multi.img'
    
    image_id = fields.Binary('Image')
    name = fields.Char('Name')
    gallery_id = fields.Integer('Related Document ID', index=True)
