const str = "dofngdf dfogn jdfngj ndjfng; jdfng ndgndf ngndf; gndfng dfng ndfgnd"

const arr = str.split('; ').map(it => it.split(' '))

console.log(arr)