from odoo import models, fields, api, _

class ModumPortfolio(models.Model):
    _name = 'portfolio'
    _order = 'sequence'
    
    is_website_published = fields.Boolean('Published in Website')
    sequence = fields.Integer('Sequence')
    name = fields.Char("Name")
    desc =fields.Char("Short Description")
    image = fields.Binary("Portfolio Image")
    multi_image_ids = fields.One2many('multi.img','gallery_id', string='Multiple Images')
    portfolio_categ_id = fields.Many2many('portfolio.category','portfolio_rel', string='Category',)
    portfolio_url = fields.Char("Url")