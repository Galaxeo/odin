let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/code/odin/03-JavaScript/test-driven-development
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +9 ~/code/odin/03-JavaScript/test-driven-development/analyzeArray.test.js
badd +17 ~/code/odin/03-JavaScript/test-driven-development/analyzeArray.js
argglobal
%argdel
edit ~/code/odin/03-JavaScript/test-driven-development/analyzeArray.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 37 + 39) / 78)
exe '2resize ' . ((&lines * 38 + 39) / 78)
argglobal
let s:l = 17 - ((16 * winheight(0) + 18) / 37)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
normal! 02|
wincmd w
argglobal
if bufexists(fnamemodify("~/code/odin/03-JavaScript/test-driven-development/analyzeArray.test.js", ":p")) | buffer ~/code/odin/03-JavaScript/test-driven-development/analyzeArray.test.js | else | edit ~/code/odin/03-JavaScript/test-driven-development/analyzeArray.test.js | endif
if &buftype ==# 'terminal'
  silent file ~/code/odin/03-JavaScript/test-driven-development/analyzeArray.test.js
endif
let s:l = 9 - ((8 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 051|
wincmd w
2wincmd w
exe '1resize ' . ((&lines * 37 + 39) / 78)
exe '2resize ' . ((&lines * 38 + 39) / 78)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
