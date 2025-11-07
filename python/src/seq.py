
import string

# name = list([int(8), int(5)])
# name = [8, 5]
# name = tuple([4])


# name = set({})

# name = (5,6)
# name = {5, 6}

# List comprehension

def listFn():
    # staking
    vowels: list = ["a", "e", "i"]
    # List comprehension
    numbers = [x for x in range(1, 101)]
    # numbers = []
    # list[start:stop:step] #List indexing
    # print(numbers[-1])
    # todo reverse | -1 on stop index => Resolved
    a = numbers[5:-1:1] # jump 2 steps from index 5
    # a = numbers[-1::-1]
    # print(a)
    
    letters = [x for x in string.ascii_letters]
    # print(letters[0::])
    # sub = letters[4:11]
    mirror = letters[:]
    # mirror = letters.copy()
    # mirror = letters
    # mirror.append("kwasas")
    # print(mirror == letters)
    # print(mirror)
    # print(letters)
    
    # mirror.reverse()
    # mirror[-1::-1]
    
    # a = ["e", "a", "u"]
    # a.sort()
    # print(a)
    # a.reverse()
    
    # print(a)
    
    # print(mirror.count("A"))
    # remove("x")
    # pop()
    # clear()
    # mirror.clear()
    # del mirror[5]
    print(mirror)
    
    print(mirror.index("Z"))
    
    # print(mirror)
    # print(sub)
    
    # for x in range(1, 101):
    #     numbers.insert(0, x)
    
    # print(numbers)
    # print(a)
    # numbers = [2,4,6]
    # # add items to a list
    # a = [4, 7, 9]
    # numbers.extend(a)
    # vowels.extend(numbers)
    # vowels.append(numbers)
    # print(vowels)
    # vowels.append("o")
    # vowels.append("u")
    # vowels.extend(numbers)
    # vowels.insert(2, "o")
    # pop() with argument uses -1 which is the last item position
    # pop(arg=0) with argument removes the element of the specified position
    # p = vowels.pop(0)
    # print(p)
    # print(vowels)
    # remove accepts an element which must be in the list
    # vowels.remove(str(p))
    # print(vowels)


def ppp():
    person = ("Jeckonia", 24, "jkuat", "BPHARM")
    name, *extra, last = person
    # name, extra, last, course = person
    # return False, None
    return name, extra

def tupleFn():
    # tuple
    # definition
    a = (4,5)
    a = tuple([4,5])
    a = (4,)
    a = 6,7
    # accessing
    
    # isAuthValid, data = ppp()
    name, *data = ppp()
    person = ("Jeckonia", 24, "jkuat", "BPHARM")
    # person = list(person)
    # person[1] = 30
    # person.append("SOPHARM")
    # print(person)
    # person = tuple(person)
    # print(person)
    name, *data  = person
    extra = data[:]
    extra.append("SOPHARM")
    extra = tuple(extra)
    # person += extra
    # person = person + extra
    # print(person * 3)
    # print(person)

    # print(person.count("Jeckonia"))
    # print(person.index("jkuat"))
    # print(len(person))
    
    # name, *extra = person
    # name, *extra, last = person
    # print(name)
    # x = tuple(extra)
    # print(x)
    # # print(course)
    # print(personName)
    # print(data)


# for x in (3, 5,6, "Jwasc"):
# for x in [3, 5,6, "Jwasc"]:
# for x in {3, 5,5, 8}:
#     print(x)
v = (3, 5,6, 5, 5,5, "Jwasc", "Jwasc")
# v = {3, 5,5, 8}
# if  "Jwasc" in v:
#     print("Found")
# else:
#     print("Not found")

for x in v:
    if x == 5:
        break
    else:
        continue
# print(v.count("Jwasc"))
def count(n):
    counter=0
    for x in v:
        if x == n:
            counter+=1
        else:
            continue
    return counter

# print(count("Jwasc"))
# print(count(5))


def setFn():
    b = {3, 5,5, 8}
    a = {2, 9, 5, 7}
    print(b)
    a.add(11)
    # difference
    diff = a.difference(b) # a - b
    diff = a - b # a - b
    diff = b.difference(a)
    # intersection
    inter = a.intersection(b) # a & b
    # union = a | b
    union = a.union(b)
    print(a)
    print(diff)
    print(inter)
    print(union)




def sqMain():
    # List
    # listFn()
    # tupleFn()
    setFn()

