import random as rnd
wanted = input("entrez recherche : ")
def test():
    day = 0
    month = 0
    year = 0

    count = 0
    
    test = ""
    tested = []

    while not wanted in tested:
        day = rnd.randint(1, 31)
        if day < 10:
            day = "0"+ str(day)
        month = rnd.randint(1,12)
        if month < 10:
            month = "0"+ str(month)
        year = rnd.randint(3,4)

        test = f"{day}{month}200{year}"
        tested.append(test)
        count += 1

    else:
        return count

import time
start_time = time.time()
print(test())
print("--- %s seconds ---" % (time.time() - start_time))