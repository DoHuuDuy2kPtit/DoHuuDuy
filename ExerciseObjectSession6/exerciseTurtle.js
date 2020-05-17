// Ex 7: Code bài con rùa di chuyển

const pos = {
    x: 100,
    y: 50,
  }
  
penup();
  
if(pos.x > 0) rt(90);
else lt(90);
  
fd(Math.abs(pos.x));
  
if(pos.y > 0) lt(90);
else rt(90);
  
fd(Math.abs(pos.y));
  
pendown();

// Ex 8: Code bài con rùa hình vuông 

const square = {
	x: 100,
  	y: 50,
  	width: 20,
}

penup();

if(square.x > 0) rt(90);
else lt(90);

fd(Math.abs(square.x));

if(square.y > 0) lt(90);
else rt(90);

fd(Math.abs(square.y));

pendown()

for(let i = 0; i < 4; i++){
	fd(square.width);
	rt(90);
}

// Ex 9: Code bài con rùa hình chữ nhật

clear();
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};

penup();

if(rect.x > 0) rt(90);
else lt(90);

fd(Math.abs(rect.x));

if(rect.y > 0) lt(90);
else rt(90);

fd(Math.abs(rect.y));

pendown()

for(let i = 0; i < 4; i++){
	if(i%2==0) fd(rect.height);
	else fd(rect.width);
	rt(90)
}

// Ex 10: 

clear();
const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
]

function drawRect(rect){
  home()
  penup();

  if(rect.x > 0) rt(90);
  else lt(90);

  fd(Math.abs(rect.x));

  if(rect.y > 0) lt(90);
  else rt(90);

  fd(Math.abs(rect.y));

  pendown()

  for(let i = 0; i < 4; i++){
      if(i%2==0) fd(rect.height);
      else fd(rect.width);
      rt(90)
  }
}

function drawSquare(square) {
  home()
  penup();

  if(square.x > 0) rt(90);
  else lt(90);

  fd(Math.abs(square.x));

  if(square.y > 0) lt(90);
  else rt(90);

  fd(Math.abs(square.y));

  pendown()

  for(let i = 0; i < 4; i++){
      fd(square.width);
      rt(90);
  }
}

for(const i of cmds){
	if(i.shape == "rect") drawRect(i);
	else drawSquare(i);
}
home();

// Ex 11;

clear();
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 50,
        y: 50,
        width: 20,
    },
]

function drawRect(rect){
  home()
  penup();

  if(rect.x > 0) rt(90);
  else lt(90);

  fd(Math.abs(rect.x));

  if(rect.y > 0) lt(90);
  else rt(90);

  fd(Math.abs(rect.y));

  pendown()

  for(let i = 0; i < 4; i++){
      if(i%2==0) fd(rect.height);
      else fd(rect.width);
      rt(90)
  }
}

function drawSquare(square) {
  home()
  penup();

  if(square.x > 0) rt(90);
  else lt(90);

  fd(Math.abs(square.x));

  if(square.y > 0) lt(90);
  else rt(90);

  fd(Math.abs(square.y));

  pendown()

  for(let i = 0; i < 4; i++){
      fd(square.width);
      rt(90);
  }
}

function drawCircle(circle) {
  home();
  penup();
  if(circle.x > 0) rt(90);
  else lt(90);
  fd(Math.abs(circle.x));
  if(circle.y > 0) lt(90);
  else rt(90);
  fd(Math.abs(circle.y) - Math.abs(circle.radius));
  pendown();
  for(let i = 0; i < 36; i++) {
  	rt(10);
    fd(10);
  }
}

for(const i of cmds) {
	if(i.shape == "rect") drawRect(i);
	else if(i.shape == "square") drawSquare(i);
	else drawCircle(i);
}
home()

