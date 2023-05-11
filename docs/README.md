# CSSCSS
#### Utility-first CSS framework.


# Create
## Position
/* ----------------------------------------------- POSITION ----------------------------------------------- */
/* POS *//* EDGE ALIGN *//* Z-INDEX *//* TRANSLATE */
Classes for controlling the positioning of elements on the page
* types: ("top-","left-","right-","bottom-")
* variations ("z-300" or "z--999"):
* percentage variations ("w-50" or "w-10"):


## Width & Height
/* ------------------------------------------ WIDTH & HEIGHT ------------------------------------------ */
/* PERCENT *//* PIXEL *//* MAX PERCENT/PIXEL *//* MIN PERCENT/PIXEL *//* PERCENT *//* PIXEL */
/* MAX PERCENT/PIXEL *//* MIN PERCENT/PIXEL */
* size of elements on the page, such as .w-50, .w-100, and .w-100vw.
* height of elements on the page, such as .h-100, .h-100-vh, and .h-50vh.


## PADDING & MARGIN
/* ------------------------------------------ PADDING & MARGIN ------------------------------------------ */
/* PADDING *//* HORIZONTAL *//* VERTICAL */
/* MARGIN *//* HORIZONTAL *//* VERTICAL */


# Update
## DISPLAY
/* ------------------------------------------ STRUCTURE ------------------------------------------ */
/* DISPLAY *//* FLEX *//* FLEX ALIGN *//* SPECIAL SPECIFIC *//* FLEX GAP */
* display property of elements, such as .hidden, .none, .block, and .flex.
* flexbox layout of elements, such as .flex-center, .flex-row, and .flex-column.
* alignment of flexbox elements, such as .flex-align-start, .flex-align-end, and .flex-align-center.
* justification of flexbox elements, such as .flex-justify-start, .flex-justify-end, and .flex-justify-center.
* self-alignment of flexbox elements, such as .flex-self-align-start, .flex-self-align-end, and .flex-self-align-center.


## Background
/* ------------------------------------------ BACKGROUND ------------------------------------------ */
/* DEBUG *//* COLOR *//* BG HOVERING *//* GLASS-MORPHISM */
* background of elements, such as .bg-red, .bg-blue, and .bg-green.
* shape of elements, such as .rounded, .rounded-lg, and .circle.
* border of elements, such as .border, .border-l-1, and .border-b-5.


## BORDER
/* ------------------------------------------ BODER ------------------------------------------ */
/* CORE *//* BORDER COLOR *//* SIDES *//* BORDER RADIUS *//* ALL *//* LEFT */
/* right *//* bottom *//* top */


## Text
/* ------------------------------------------ TEXT ------------------------------------------ */
/* FAMILY *//* SIZE *//* WEIGHT *//* COLOR *//* ALIGN *//* LETTERSPACING *//* WORD SPACING */
/* STYLE *//* SHADOW */
* text properties of elements, such as .tx-lg, .tx-center, and .tx-bold.
* spacing of text, such as .letter-s-2 and .word-s-3.
* decoration of text, such as .nodeco, .nowrap, and .strikethrough.


# Behave
## CURSOR
/* ------------------------------------------ CURSOR ------------------------------------------ */


## Opacity
/* ------------------------------------------ OPACITY & HOVER ------------------------------------------ */
* opacity of elements, such as .opacity-50 and .opacity-hover-25.


## Filter
/* ------------------------------------------ FILTERS ------------------------------------------ */


## Media Query
/* ------------------------------------------ MEDIA QUERY ------------------------------------------ */
/* Q_xs_lg_flex-col */
/* Q_xs_xl_flex-col */
/* show | display | none */
/* 0600px */ /* 0601px */
/* 0900px */ /* 0901px */
/* 1200px */ /* 1201px */
/* 1436px */ /* 1437px */
/* Basic */
/* Only Extra Small */
/* Only Small */
/* Only Medium */
/* Only Large */
/* Only Extra Large */
/* Basic Range */
/* From Extra Small to Small */
/* From Extra Small to Small */
/* From Extra Small to Medium */
/* From Extra Small to Large */
/* From Small to Medium */
/* From Small to Large */
/* From Small to Infinity */
/* From Medium to Large */
/* From Medium to Infinity */
/* From Large to Infinity */
/* From Large to Infinity */
/* Basic Combo */
/* Extra Small and Medium */
/* Extra Small and Large */
/* Extra Small and Infinity */
/* Small and Large */
/* Small and Infinity */
/* Medium and Infinity */
/* Advanced Range Combo */
/* From Extra Small to Small and Large */
/* From Extra Small to Small and Infinity */
/* From Extra Small to Medium and Infinity */
/* From Small to Medium and Infinity */


## Animation
/* ------------------------------------------ ANIMATION ------------------------------------------ */
* the viewport size, such as .sm, .md, and .lg.
* a range of viewport sizes, such as .md-xl.
* a combination of viewport sizes, such as .sm-md-only.
* Advanced complex combinations of viewport sizes.
* Classes for adding animations to elements, such as .hover-hover, .spin-spin, and .shake-shake.












graph LR;

    subgraph Behave
        subgraph Border
            border --> border_init
            border_init("noborder | .border-?")
            border_init -->|color| border_types_color("`
                red-? | green-? | blue-? | white-? | grey-? | lgrey-?
            `")
            border_types_color --> border_types_color_variations("? | 50")

            style border fill:#ffffff
            style border_types_color_variations fill:#ffccaa                        
        end

        subgraph BorderRadius
            borderradius("border radius") --> borderradius_init
            borderradius_init(".bord-r-?")
            borderradius_init -->|all sides| border_types("`
                5 | 8 | 10 | 12 | 15 | 25 | 50 | 100 | 100p
            `")
            borderradius_init -->|2 corners| border_types_side("`t-? | b-? | l-? | r-?`")
            border_types_side --> border_types_side_variations("`
                5 | 8 | 10 | 12 | 15 | 25 | 50 | 100 | 100p
            `")

            style borderradius fill:#ffffff
            style border_types fill:#ffccaa                        
            style border_types_side_variations fill:#ffccaa                        
        end

        subgraph Cursor
            cursor --> cursor_types(".cursor | .pointer | .clickble | .grab | .grabble | .stopcursor | .waitcursor")
            cursor -->|events| cursor_events_types(".noclick | .nocursor | .noselect")

            style cursor fill:#ffffff
        end

        style Border fill:#f9f9f9
        style BorderRadius fill:#f9f9f9
        style Cursor fill:#f9f9f9
    end



    subgraph Update          
        subgraph Background
            background --> background_init
            background_init(".bg-? | ddg") -->|color| background_types_color("red-? | green-? | blue-?")
            background_init(".bg-?") -->|black & white| background_types_bnw("b-? | w-?")
            background_init(".bg-?") -->|glassmorphism| background_types_glass("glass-")
            background -->|debug| background_debug("_ddr | _ddg | _ddb")
            background_types_bnw --> background_types_bnw_variations("`
                2 | 5 | 10 | 20 | ... | 50 | 75
            `")
            background_types_color --> background_types_color_variations("`
                25 | 50 | 75
            `")
            background_types_glass --> background_types_glass_variations("`
                1 | 2 | ... | 6 | 10 | 20 | 50 | 100
            `")

            style background fill:#ffffff
            style background_types_color_variations fill:#ffccaa                        
            style background_types_bnw_variations fill:#ffccaa                        
            style background_types_glass_variations fill:#ffccaa                        
        end

        subgraph Opacity
            opacity --> opacity_init(".opaci-?")
            opacity_init --> opacity_types_basic("`0 | 5 | 10 | ... | 30 | 40 | 50 | 75 | 100`")
            opacity_init --> opacity_types_hover("hov-? | chov-? | hov--? | chov--?")
            opacity_init --> opacity_types_hover_nested("cahov-? | cbhov-? | cahov--? | cbhov--?")
            opacity_types_hover -->|hover| opacity_types_basichover("`5 | 10 | 25 | 50 | 75 | 100`")
            opacity_types_hover -->|clickhover| opacity_types_clicknhover("`0 | 5 | 10 | ... | 30 | 40 | 50 | 75 | 100`")
            opacity_types_hover_nested --> opacity_types_hover_nested_variations("`5 | 10 | 25 | 50 | 75 | 100`")
            style opacity_types_basic fill:#ffccaa
            style opacity_types_basichover fill:#ffccaa
            style opacity_types_clicknhover fill:#ffccaa
            style opacity_types_hover_nested_variations fill:#ffccaa
            style opacity fill:#ffffff
        end

        subgraph Filter
            invert --> invert_init(".invert")
            blur --> blur_init(".blur-?")
            blur_init --> blur_types("1 | 2 | ... | 14")

            scale --> scale_init(".scale-?")
            scale_init --> scale_types("`50 | 60 | 70 | 90 | 110 | 120 | 150 | 160 | 200 | 250`")
            scale_init --> scale_types_hover("hov-?")
            scale_types_hover --> scale_types_hover_variations("`50 | 60 | 70 | 90 | 110 | 120 | 150 | 160 | 200 | 250`")

            rotation --> rot_init(".rot-?")
            rot_init --> rot_types("`50 | 60 | 70 | 90 | 110 | 120 | 150 | 160 | 200 | 250 | 270`")
            rot_init --> rot_types_hover("hov-?")
            rot_types_hover --> rot_types_hover_variations("`50 | 60 | 70 | 90 | 110 | 120 | 150 | 160 | 200 | 250 | 270`")

            style invert fill:#ffffff
            style scale fill:#ffffff
            style blur fill:#ffffff
            style blur_types fill:#ffccaa
            style scale_types fill:#ffccaa
            style scale_types_hover_variations fill:#ffccaa
            style rotation fill:#ffffff
            style rot_types fill:#ffccaa
            style rot_types_hover_variations fill:#ffccaa
        end

        style Background fill:#f9f9f9
        style Opacity fill:#f9f9f9
        style Filter fill:#f9f9f9
    end



    subgraph Structure
        subgraph Spacing
            padding --> padding_init
            padding_init(".p?")
            padding_init --> padding_types("`
                a-? | x-? | y-? | t-? | b-? | l-? | r-? 
            `")
            padding_types --> padding_variations("0 | 1 | ... | 8 | 100 | 1500 | 200")
            margin --> margin_init
            margin_init(".m?")
            margin_init --> margin_types("`
                a-? | x-? | y-? | t-? | b-? | l-? | r-? 
            `")
            margin_types --> margin_variations("`
                0 | 1 | ... | 8 | 100 | 1500 | 200
            `")
            
            style padding fill:#ffffff
            style margin fill:#ffffff
            style padding_variations fill:#ffccaa  
            style margin_variations fill:#ffccaa            
        end

        subgraph Display
            display --> display_types
            display_types(".block | .flex | .none")
            display_types -->|flex| display_types_flex("flex-?")
            display_types_flex -->|direction| display_flex_direction("`row | col | row-r | col-r`")
            display_types_flex -->|scheme| display_flex_scheme("`center | wrap | between | around`")
            display_types_flex -->|alignment| display_flex_alignment("`align | justify`")
            display_flex_alignment -->|align| display_flex_alignment_variations_a("start | end | stretch")
            display_flex_alignment -->|justify| display_flex_alignment_variations_b("start | end | between | around")
            display_types_flex -->|gap| display_gap("`1 | 2 | ... | 8 | 50`")
            display_types_flex -->|basis| display_basis("`1 | 2 | 3`")

            style display fill:#ffffff                        
            style display_gap fill:#ffccaa                        
            style display_basis fill:#ffccaa                        
        end

        subgraph Text
            text --> text_init
            text_init -->|font family| text_types_fontfamily("sans | roman")
            text_init(".tx-?") -->|font size| text_types_size("`
                xxs | xs | xsm |
                sm | smd |
                md | mdl | lg | lgx | lx |
                xl | xxl | xxxl
            `")
            text_init -->|"weight"| text_types_bold("bold") --> text_types_bold_variations("2 | 3 | ... | 9")
            text_init -->|"align"| text_types_align("center | end | start")
            text_init -->|"spacing"| text_types_spacing("ls-? | ws-?")
            text_types_spacing --> text_types_spacing_variations("1 | 2 | ... | 8 | 10 | 15 | 25")
            text_init -->|"lineheight"| text_types_lineheight("lineheight") --> text_types_lineheight_variations("100 | 150 | 200")
            text_init -->|"color"| text_types_color("red | white | black") --> text_types_color_variations("25 | 50 | 75")
            text_init -->|"shadow"| text_types_shadow("shadow") --> text_types_shadow_variations("1 | 2 | ... | 5")
            
            style text fill:#ffffff
            style text_types_bold_variations fill:#ffccaa
            style text_types_color_variations fill:#ffccaa
            style text_types_lineheight_variations fill:#ffccaa
            style text_types_spacing_variations fill:#ffccaa
            style text_types_shadow_variations fill:#ffccaa
        end
    
        style Structure fill:#f9f9f9
    end



    subgraph Create
        subgraph Position
            position --> position_init
            position_init(.pos-?) --> position_types("rel | abs | fix | fixed")
            edge(edge) --> edge_types(".top-? | .bottom-? | .left-? | .right-?")
            edge_types --> edge_variations("0 | 25p | 50p | 75p")
            translate --> translate_init
            translate_init(.translate-?) --> translate_types("x-? | x--? | y-? | y--?")
            translate_types --> translate_variations("`25 | 50 | 75 | 100 | 150 | 200 | 250`")

            style position fill:#ffffff
            style edge fill:#ffffff
            style zindex fill:#ffffff
            style translate fill:#ffffff
            style edge_variations fill:#ffccaa
            style translate_variations fill:#ffccaa            
        end

        subgraph Size
            size --> size_init
            size_init(".w-? | .h-?") --> size_types("? | min-? | max-?")
            size_types -->|percent| size_types_percent("`
                5 | 10 | 20 | 25 | 30 | 40 | ... | 90 | 95 | 100
            `")
            size_types -->|pixel| size_types_pixel            
            size_types_pixel("`
                50 | 80 | 100 | 120 | 150 | 200 | 250 | 220 | 300 | 400 | 450| 500 | 600 | 650 | 700 | 1080
            `")
            size_types_pixel --> size_types_pixel_types("px")
            size_types -->|viewport| size_types_viewport("80 | 95 | 90 | 100")
            size_types_viewport --> size_types_viewport_types("vw | vh")

            style size fill:#ffffff
            style size_types_percent fill:#ffccaa            
            style size_types_pixel fill:#ffccaa            
            style size_types_viewport fill:#ffccaa            
        end

        subgraph Depth
            zindex --> zindex_init
            zindex_init(.z-?) --> zindex_types("? | -?")
            zindex_types --> zindex_variations("`
                1 | 2 | 3 | 5 | 10 | 50 | 100 | 200 | ... | 900 | 999 | 1000 | 1001
            `")
            style zindex_variations fill:#ffccaa            
        end
        style Create fill:#f9f9f9
    end
