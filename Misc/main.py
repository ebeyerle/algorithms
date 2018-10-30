import adder

arr1 = [2,4,5,6,8,10]
arr2 = [1,2,4,8,16,32]

temp = []

for x in arr1:
    if x in arr2:
        temp.append(x)


for x in arr1:
    if x in arr2:
        arr1.remove(x)
    else:
        arr2.append(x)

l1 = []
l2 = []

word = "hello"
for i in range(len(word)):
    print word[i]

for i in range(len(word)):
    print word[(len(word)-i)-1]
    l2.append(word[(len(word)-i)-1])
print l2
#print l1
