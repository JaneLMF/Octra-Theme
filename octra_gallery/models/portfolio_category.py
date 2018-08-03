from odoo import models, fields, api, _

class PortfolioCategory(models.Model):
    _name = 'portfolio.category'
    
    name = fields.Char("Name")
