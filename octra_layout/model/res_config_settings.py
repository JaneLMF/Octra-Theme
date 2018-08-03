from odoo import api, fields, models
from docutils.nodes import field
 
class res_config_setting(models.TransientModel):
    _inherit = 'res.config.settings'
    
    octra_header_style_one = fields.Char('octra header style1',related='website_id.octra_header_style_one')
    octra_header_style_two = fields.Char("octra header style2",related='website_id.octra_header_style_two')
