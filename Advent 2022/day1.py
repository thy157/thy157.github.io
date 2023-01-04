def solutionA(lines):
  calorise = 0
  max_calorise = 0
  for line in lines:
    if line =='':
        if calorise > max_calorise:
           max_calorise = calorise
        calorise = 0
    else:
        calorise += int(line)
  if calorise > max_calorise:
     max_calorise = calorise

  return max_calorise 


def solutionB(lines):
  
  
  return -2 

# Helper function for loading the problem data
def load_data(fileName):
  with open(fileName, "r") as input_data:
    lines = input_data.readlines()
  for i in range(len(lines)):
    lines[i] = lines[i].strip()
  return lines


if __name__ == "__main__":
  input_file_name = "dummy-input.txt"
  # TODO: Uncomment line below to use real input
  # input_file_name = "input.txt" 
  
  print("Loading data")
  lines = load_data(input_file_name)
  
  resultA = solutionA(lines)
  print(f"Solution for part A: {resultA}")
  

  resultB = solutionB(lines)
  print(f"Solution for part B: {resultB}")
  
