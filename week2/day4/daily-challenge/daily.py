#Daily Challenge 

def decode_matrix(matrix_string):
    
    rows = matrix_string.split('\n')
    matrix = [list(row) for row in rows]

    
    decoded_message = ''

    for col in range(len(matrix[0])):
        
        column_string = ''
        for row in matrix:
            if col < len(row):
                column_string += row[col]

        decoded_message += ''.join([char if char.isalpha() else ' ' for char in column_string]).strip() + ' '

   
    return ' '.join(decoded_message.split())

matrix_string = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""


message = decode_matrix(matrix_string)
print(message)
