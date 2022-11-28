kummition = 0.5
vekselkurs = 7.44
kummitionProcent = 0.02


print('Hvor mange penge vil du væksle?')
DKK = int(input())
euro = DKK/vekselkurs
print(f'Dine {DKK} kr er {euro:.3f} Euro' )

gebyr = euro * kummitionProcent

if gebyr > kummition :    
    print(f'Du får {euro-gebyr:.3f} efter gebyr')

else:
    print(f'Du får {euro-kummition:.3f} efter gebyr')

print('')