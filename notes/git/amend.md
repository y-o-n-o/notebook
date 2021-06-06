# 修改上一次提交

## 本地分支修改

把当前 Stage 的修改添加到上一次提交中,

并修改上一次提交 message :
```sh:no-line-numbers
git commit --amend
# 或直接覆盖提交信息
git commit --amend -m "xxxx"
```

不修改上一次提交 message :
```sh:no-line-numbers
git commit --amend --no-edit
```

## 提交到远程分支

需要用 `--force-with-lease` 指令来 push 到远程。
```sh:no-line-numbers
git push --force-with-lease
```
