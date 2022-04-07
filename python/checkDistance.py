from math import floor
from random import random


asset={2:"yes",3:"yes"}
for i in asset.keys():
    print(len(asset.keys()))
val = random()*len(asset.keys())
print(list(asset.keys()))
print(floor(val))