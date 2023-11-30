def display_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 5)

def player_input(player):
    valid = False
    while not valid:
        try:
            position = int(input(f"Player {player}, choose your position (1-9): "))
            if 1 <= position <= 9:
                valid = True
            else:
                print("Invalid input. Please choose a number between 1-9.")
        except ValueError:
            print("Invalid input. Please enter a number.")
    return position

def place_marker(board, position, player):
    row = (position - 1) // 3
    col = (position - 1) % 3
    if board[row][col] == ' ':
        board[row][col] = player
        return True
    else:
        print("This position is already taken. Choose another position.")
        return False

def check_win(board):
    
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != ' ' or \
           board[0][i] == board[1][i] == board[2][i] != ' ':
            return True
    if board[0][0] == board[1][1] == board[2][2] != ' ' or \
       board[0][2] == board[1][1] == board[2][0] != ' ':
        return True
    return False

def check_draw(board):
    for row in board:
        if ' ' in row:
            return False
    return True

def play():
    board = [[' ' for _ in range(3)] for _ in range(3)]
    current_player = 'X'
    game_on = True

    while game_on:
        display_board(board)
        valid_move = False

        while not valid_move:
            position = player_input(current_player)
            valid_move = place_marker(board, position, current_player)

        if check_win(board):
            display_board(board)
            print(f"Player {current_player} wins!")
            break

        if check_draw(board):
            display_board(board)
            print("The game is a draw!")
            break

        current_player = 'O' if current_player == 'X' else 'X'

play()
