# portfolio-lukas
Lukas portfolio


# Sass
<!-- live watch scss to css-->
sass --watch src/scss:dist/css

## Sass Syntax
### Variables
$primaryColor: blue;

<!-- background-color:blue -->
background-color: $primaryColor

### Sass Nesting
header{
    background-color:blue

    button{
        background-color:green;
        
        &:hover{
            background-color:red;
        }
    }
}

### Sass imports
file name example: "_header.scss"

<!-- import file -->
@import ".header"

### Sass mixins
<!-- mixins with parameters -->
@mixin flexCenter($direction, $background){
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: $direction;
    background: $background;
}
<!-- call the mixin -->
header{
    @include flexCenter(column, blue);
}
.contact{
    @include flexCenter(row, red); 
}

### extend
<!-- contact inherit exactly the same as header -->
contact{
    @extend header;
}

### calculation operators
<!-- + - / * -->
width:100% - 20%;


